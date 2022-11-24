import { IStory } from '../interfaces';
import Parse from 'parse';
import React from 'react';
import { StoryContext } from '../contexts/Story';
import { useTranscriptParser } from './useTranscriptParser';

export const useStory = () => {
   const { state, dispatch } = React.useContext(StoryContext);
   const { transcriptParser } = useTranscriptParser();

   const getStoriesFromBackend = async function() {
      try {
         const query = new Parse.Query('Story');
         query.equalTo('isReadable', true);
         query.descending('publishDate');

         const backendStories = await query.find();

         const mappedStories = backendStories.map((backendProduct) => {
            return {
               title: backendProduct.get('title'),
               subtitle: backendProduct.get('subtitle'),
               content: backendProduct.get('content')
                  .split(/[\n]/g)
                  .filter((entry: string) => entry !== ''),
               storyId: backendProduct.get('storyId'),
               transcript: transcriptParser(backendProduct.get('transcript')),
               imageUrl: backendProduct.get('coverImage')._url,
               voiceoverUrl: backendProduct.get('voiceover')?._url,
               externalReadLink: backendProduct.get('externalLink'),
               publishDate: backendProduct.get('publishDate'),
            };
         });

         dispatch({ type: 'SET_STORIES', payload: mappedStories });
      } catch (e) {
         console.error(e);
      }
   };

   const getStoryInfo = (storyId: string): IStory => {
      const stories = state.stories;
      if (stories.length === 0) getStoriesFromBackend();
      return stories.find((story) => story.storyId === storyId) as IStory;
   };

   const getStoryContentDetails = (storyId: string) => {
      const stories = state.stories;
      if (stories.length === 0) getStoriesFromBackend();
      const story = stories.find((story) => story.storyId === storyId) as IStory;

      const storyParagraphs = story.content.map((paragraph) => paragraph.split( ' '));
      const storyWords = storyParagraphs.flat().map((word, index) => {
         return {
            word,
            index
         };
      });

      let accumulator = 0;
      const storyBreakpoints = storyParagraphs.map(
         (paragraph) => {
            const result = paragraph.length + accumulator - 1;
            accumulator = accumulator + paragraph.length;
            return result;
         })
         .slice(0, storyParagraphs.length - 1);

      const storyTimestamps = story.transcript ? story.transcript.timestamps : [];

      return { storyParagraphs, storyWords, storyBreakpoints, storyTimestamps };
   };

   return { stories: state.stories, getStoriesFromBackend, getStoryInfo, getStoryContentDetails };
};
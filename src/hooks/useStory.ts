import { IStory } from '../interfaces';
import { IWordElement } from '../interfaces';
import Parse from 'parse';
import React from 'react';
import { StoryContext } from '../contexts/Story';

export const useStory = () => {
   const { state, dispatch } = React.useContext(StoryContext);

   const getStoriesFromBackend = function() {
      try {
         const query = new Parse.Query('Story');
         query.equalTo('isReadable', true);
         query.descending('publishDate');

         query.find().then((backendStories) => {
            const mappedStories: IStory[] = backendStories.map((backendProduct) => {
               return {
                  author: backendProduct.get('author'),
                  content: backendProduct.get('content')
                     .split(/[\n]/g)
                     .filter((entry: string) => entry !== ''),
                  imageUrl: backendProduct.get('coverImage')._url,
                  storyId: backendProduct.get('storyId'),
                  title: backendProduct.get('title'),
                  timestamps: backendProduct.get('voiceoverTimestamps'),
                  publishDate: backendProduct.get('publishDate'),
                  voiceoverUrl: backendProduct.get('voiceover')?._url,
                  voiceoverPCM: backendProduct.get('voiceoverPCM'),
               };
            });

            dispatch({ type: 'SET_STORIES', payload: mappedStories });
         });
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

      const paragraphs = story.content.map((paragraph) => paragraph.split( ' '));
      const sentences = story.content.map((paragraph) => paragraph.split( /[.?] /));
      const words: IWordElement[] = paragraphs.flat().map((text, index) => {
         return {
            text,
            index
         };
      });

      let accumulator = 0;
      const paragraphBreakpoints = paragraphs.map(
         (paragraph) => {
            const result = paragraph.length + accumulator - 1;
            accumulator = accumulator + paragraph.length;
            return result;
         })
         .slice(0, paragraphs.length - 1);

      accumulator = 0;
      const sentenceBreakpoints = sentences.flat().map((sentence) => {
         const result = sentence.split(' ').length + accumulator - 1;
         accumulator = accumulator + sentence.split(' ').length;
         return result;
      });

      const audioTimestamps = story.timestamps;

      return { paragraphs, words, paragraphBreakpoints, sentenceBreakpoints, audioTimestamps };
   };

   return { stories: state.stories, getStoriesFromBackend, getStoryInfo, getStoryContentDetails };
};
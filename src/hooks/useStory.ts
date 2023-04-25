import { IStory } from '../interfaces';
import Parse from 'parse';
import React from 'react';
import { StoryContext } from '../contexts/Story';
import { IBrowseTemplate, IWordElement } from '../interfaces';

export const useStory = () => {
   const { state, dispatch } = React.useContext(StoryContext);

   const getHomeContentFromBackend = function() {
      try {
         dispatch({ type: 'CLEAR_SELECTED_STORY', payload: {} });

         Parse.Cloud.run('getHomePageContent').then((homePageData: IBrowseTemplate) => {
            dispatch({ type: 'SET_HOME_CONTENT', payload: homePageData });
         });
      } catch (e) {
         console.error(e);
      }
   };

   const getStoryInfo = (storyId: string) => {
      try {
         Parse.Cloud.run('getStoryDetails', { storyId }).then((story: IStory) => {
            dispatch({ type: 'SET_SELECTED_STORY', payload: story });
         });
      } catch (e) {
         console.error(e);
      }
   };

   const getStoryContentDetails = () => {
      const story = state.selectedStory;

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

      return { words, paragraphBreakpoints, sentenceBreakpoints, audioTimestamps };
   };

   return {
      homePageContent: state.homePageContent,
      selectedStory: state.selectedStory,
      getStoryCategoriesFromBackend: getHomeContentFromBackend,
      getStoryInfo,
      getStoryContentDetails
   };
};
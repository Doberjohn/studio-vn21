import { IStory } from '../interfaces';
import Parse from 'parse';
import React from 'react';
import { StoryContext } from '../contexts/Story';

export const useStory = () => {
   const { state, dispatch } = React.useContext(StoryContext);

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
               imageUrl: backendProduct.get('coverImage')._url,
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

      console.log(storyId);
      console.log(stories);

      return stories[0];
   };

   return { stories: state.stories, getStoriesFromBackend, getStoryInfo };
};
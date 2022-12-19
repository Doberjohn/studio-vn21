import { BrowseTemplate } from '../../templates';
import { useStory } from '../../../hooks';
import React, { useEffect, useState } from 'react';

export const BrowsePage = () => {
   const { stories, getStoriesFromBackend } = useStory();
   const [ isLoadingStories, setIsLoadingStories ] = useState(stories.length === 0);

   useEffect(() => {
      if (stories.length === 0) {
         getStoriesFromBackend();
      }
   }, []);

   useEffect(() => {
      if (stories.length > 0) setIsLoadingStories(false);
   }, [stories]);

   return (
      <BrowseTemplate
         latestStory={stories[0]}
         previousStories={stories.slice(1, 7)}
         isLoading={isLoadingStories}
      />
   );
};
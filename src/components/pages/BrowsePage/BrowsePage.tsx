import { BrowseTemplate } from '../../templates';
import { useStory } from '../../../hooks';
import React, { useEffect, useState } from 'react';

export const BrowsePage = () => {
   const { stories, getStoriesFromBackend } = useStory();
   const [ isLoadingStories, setIsLoadingStories ] = useState(true);

   useEffect(() => {
      getStoriesFromBackend();
   }, []);

   useEffect(() => {
      if (stories.length > 0) setIsLoadingStories(false);
   }, [stories]);

   return (
      <BrowseTemplate
         latestStory={stories[0]}
         previousStories={stories}
         isLoading={isLoadingStories}
      />
   );
};
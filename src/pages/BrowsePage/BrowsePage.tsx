import { BrowseTemplate } from '../../templates';
import { Div } from '../../components/atoms';
import { LoadingSpinner } from '../../components/molecules';
import { useStory } from '../../hooks';
import React, { useEffect, useState } from 'react';

export const BrowsePage: React.FC = () => {
   const { homePageContent, getStoryCategoriesFromBackend } = useStory();
   const [ isLoadingStories, setIsLoadingStories ] = useState(true);

   useEffect(() => {
      getStoryCategoriesFromBackend();
   }, []);

   useEffect(() => {
      if (homePageContent.categories && homePageContent.categories.length > 0) {
         setIsLoadingStories(false);
      }
   }, [homePageContent]);

   return (
      <Div>
         {isLoadingStories ? (
             <Div className='full-height perfectly-centered'>
                <LoadingSpinner/>
             </Div>
         ): (
             <BrowseTemplate
                 latestStory={homePageContent.latestStory}
                 categories={homePageContent.categories}
             />
         )}
      </Div>
   );
};
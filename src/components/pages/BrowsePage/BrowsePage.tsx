import { BrowseTemplate } from '../../templates';
import { useStory } from '../../../hooks';
import React, { useEffect, useState } from 'react';
import {Div} from "../../atoms";
import {LoadingSpinner} from "../../molecules";

export const BrowsePage: React.FC = () => {
   const { stories, getStoriesFromBackend } = useStory();
   const [ isLoadingStories, setIsLoadingStories ] = useState(true);

   useEffect(() => {
      getStoriesFromBackend();
   }, []);

   useEffect(() => {
      if (stories.length > 0) setIsLoadingStories(false);
   }, [stories]);

   return (
      <Div>
         {isLoadingStories ? (
             <Div className='full-height perfectly-centered'>
                <LoadingSpinner/>
             </Div>
         ): (
             <BrowseTemplate
                 latestStory={stories[0]}
                 previousStories={stories}
             />
         )}
      </Div>
   );
};
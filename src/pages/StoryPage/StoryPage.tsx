import { Div } from '../../components/atoms';
import { LoadingSpinner } from '../../components/molecules';
import { StoryTemplate } from '../../templates';
import { useParams } from 'react-router-dom';
import { useStory } from '../../hooks';
import React, { useEffect, useState } from 'react';

export const StoryPage: React.FC = () => {
   const params = useParams();
   const { selectedStory, getStoryInfo } = useStory();
   const [isLoadingStories, setIsLoadingStories] = useState(true);
   const storyId = params.storyId || '';

   useEffect(() => {
      getStoryInfo(storyId);
   }, []);

   useEffect(() => {
      if (selectedStory.content.length > 0) {
         setIsLoadingStories(false);
      }
   }, [selectedStory]);

   return (
      <Div>
         {isLoadingStories ? (
            <Div className='full-height perfectly-centered'>
               <LoadingSpinner/>
            </Div>
         ) : (
            <StoryTemplate story={selectedStory}/>
         )}
      </Div>
   );
};

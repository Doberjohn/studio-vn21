import { HomeTemplate } from '../../components/templates';
import { useStory } from '../../hooks/useStory';
import { Div, LoadingSpinner } from '../../components/atoms';
import React, { useEffect, useState } from 'react';

export const Home = () => {
   const { stories, getStoriesFromBackend } = useStory();
   const [ isLoadingStories, setIsLoadingStories ] = useState(stories.length === 0);

   useEffect(() => {
      if (stories.length === 0) {
         getStoriesFromBackend().then(() => {
            setIsLoadingStories(false);
         });
      }
   }, []);

   if (isLoadingStories) return (
      <Div className='perfecty-centered full-height'>
         <LoadingSpinner size={300}/>
      </Div>
   );

   return <HomeTemplate latestStory={stories[0]} stories={stories.slice(1, 7)}/>;
};
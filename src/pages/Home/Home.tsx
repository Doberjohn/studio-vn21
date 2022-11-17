import { HomeTemplate } from '../../components/templates';
import { StoryContext } from '../../contexts/Story';
import { useStory } from '../../hooks/useStory';
import { Div, LoadingSpinner } from '../../components/atoms';
import React, { useContext, useEffect } from 'react';

export const Home = () => {
   const { stories, getStoriesFromBackend } = useStory();
   console.log(stories);

   useEffect(() => {
      if (stories.length === 0) {
         getStoriesFromBackend();
      }
   }, [stories]);

   // if (stories.length === 0) return (
   //    <Div className='perfecty-centered full-height'>
   //       <LoadingSpinner size={300}/>
   //    </Div>
   // );
   if (stories.length === 0) return null;
   return <HomeTemplate latestStory={stories[0]} stories={stories.slice(1, 7)}/>;
};
import { Div } from '../../components/atoms';
import { HomeTemplate } from '../../components/templates';
import { useStory } from '../../hooks/useStory';
import React, { useEffect } from 'react';

export const Home = () => {
   const { stories, readStories } = useStory();

   useEffect(() => {
      readStories();
   }, []);

   if (stories.length === 0) return <Div className='perfecty-centered full-height'>Loading...</Div>;
   return <HomeTemplate latestStory={stories[0]} stories={stories.slice(1, 7)}/>;
};
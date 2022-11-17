import React from 'react';
import { ReaderTemplate } from '../../components/templates';
import { useParams } from 'react-router-dom';
import { useStory } from '../../hooks/useStory';

export const Reader = () => {
   const params = useParams();
   const storyId = params.storyId;
   const { getStoryInfo } = useStory();

   if (!storyId) return null;

   const story = getStoryInfo(storyId);
   return <ReaderTemplate story={story}/>;
};

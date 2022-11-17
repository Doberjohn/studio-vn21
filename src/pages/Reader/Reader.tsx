import React from 'react';
import { ReaderTemplate } from '../../components/templates';
import { useParams } from 'react-router-dom';
import { useStory } from '../../hooks/useStory';

export const Reader = () => {
   const params = useParams();
   const { getStoryInfo } = useStory();
   const storyId = params.storyId || '';
   const story = getStoryInfo(storyId);

   return <ReaderTemplate story={story}/>;
};

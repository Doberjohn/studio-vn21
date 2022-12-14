import React from 'react';
import { ReaderTemplate } from '../../templates';
import { useParams } from 'react-router-dom';
import { useStory } from '../../../hooks';

export const Reader = () => {
   const params = useParams();
   const { getStoryInfo } = useStory();
   const storyId = params.storyId || '';
   const story = getStoryInfo(storyId);

   return <ReaderTemplate story={story}/>;
};

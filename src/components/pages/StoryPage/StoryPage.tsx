import React from 'react';
import { StoryTemplate } from '../../templates';
import { useParams } from 'react-router-dom';
import { useStory } from '../../../hooks';

export const StoryPage: React.FC = () => {
   const params = useParams();
   const { getStoryInfo } = useStory();
   const storyId = params.storyId || '';
   const story = getStoryInfo(storyId);

   return <StoryTemplate story={story}/>;
};

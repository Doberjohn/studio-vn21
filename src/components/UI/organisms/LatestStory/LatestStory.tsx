import { IStory } from '../../../../interfaces';
import React from 'react';
import { StoryCard } from '../index';

interface LatestStoryProps {
   story: IStory,
}

export const LatestStory = ({ story }: LatestStoryProps) => {
   return (
      <StoryCard
         story={story}
         isLatest={true}/>
   );
};
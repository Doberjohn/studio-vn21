import { Div } from '../../atoms';
import { IStory } from '../../../../interfaces';
import React from 'react';
import { StoryCard } from '../index';

interface LatestStoryProps {
   story: IStory,
   onClickAction: (storyId: string) => void,
}

export const LatestStory = ({ story, onClickAction }: LatestStoryProps) => {
   return (
      <Div>
         <Div className='h2 mb-2'>Latest story</Div>
         <StoryCard
            story={story}
            isLatest={true}
            onClickAction={onClickAction}/>
      </Div>
   );
};
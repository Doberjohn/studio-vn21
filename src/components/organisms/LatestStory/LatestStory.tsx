import { IStory } from '../../../interfaces';
import React from 'react';
import { StoryCard } from '../index';
import { Div, Span } from '../../atoms';

interface LatestStoryProps {
   story: IStory,
   onClickAction: (storyId: string) => void,
}

export const LatestStory = ({ story, onClickAction }: LatestStoryProps) => {
   return (
      <Div>
         <Span className='h2'>Latest story</Span>
         <StoryCard
            story={story}
            isLatest={true}
            onClickAction={onClickAction}/>
      </Div>
   );
};
import { IStory } from '../../../interfaces';
import { StoryCard } from '../index';
import { Div, Span } from '../../atoms';
import React, { MouseEventHandler } from 'react';

interface LatestStoryProps {
   story: IStory,
   onClickAction: MouseEventHandler,
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
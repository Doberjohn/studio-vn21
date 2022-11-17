import { IStory } from '../../../interfaces';
import React from 'react';
import { StoryCard } from '../index';
import { Div, Span } from '../../atoms';

export const LatestStory = (story: IStory) => {
   return (
      <Div>
         <Span className='h2'>Latest story</Span>
         <StoryCard
            story={story}
            isLatest={true}
            className='mt-4'/>
      </Div>
   );
};
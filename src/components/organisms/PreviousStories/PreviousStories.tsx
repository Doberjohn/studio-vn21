import { IStory } from '../../../interfaces';
import { StoryCard } from '../index';
import { Div, Span } from '../../atoms';
import React, { MouseEventHandler } from 'react';

interface PreviousStoriesProps {
   stories: IStory[],
   onClickAction: MouseEventHandler,
}

export const PreviousStories = ({ stories, onClickAction }: PreviousStoriesProps) => {
   return (
      <Div>
         <Span className='h2'>Previous stories</Span>
         <Div className='row'>
            {stories.map((story, index) => {
               return (
                  <Div key={`previous-story-${index}`} className='col-md-6'>
                     <StoryCard
                        story={story}
                        isLatest={false}
                        onClickAction={onClickAction}/>
                  </Div>
               );
            })}
         </Div>
      </Div>
   );
};
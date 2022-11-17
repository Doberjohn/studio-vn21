import { IStory } from '../../../interfaces';
import React from 'react';
import { StoryCard } from '../index';
import { Div, Span } from '../../atoms';

interface PreviousStoriesProps {
   stories: IStory[],
   onClickAction: (storyId: string) => void,
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
import { Div } from '../../atoms';
import { IStory } from '../../../../interfaces';
import React from 'react';
import { StoryCard } from '../StoryCard/StoryCard';

interface StorySliderProps {
   title: string;
   stories: IStory[],
}

export const StorySlider = ({ title, stories }: StorySliderProps) => {
   return (
      <Div>
         <Div className='h5 mb-2'>{title}</Div>
         <Div className='row'>
            {stories.map((story, index) => {
               return (
                  <Div key={`previous-story-${index}`} className='col-4 mb-4'>
                     <StoryCard
                        story={story}
                        isLatest={false}
                        useMobileCover={true}/>
                  </Div>
               );
            })}
         </Div>
      </Div>
   );
};
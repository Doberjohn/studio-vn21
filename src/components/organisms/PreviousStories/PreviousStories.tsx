import { Div } from '../../atoms';
import { IStory } from '../../../interfaces';
import React from 'react';
import { StoryCard } from '../index';

interface PreviousStoriesProps {
   stories: IStory[],
}

export const PreviousStories: React.FC<PreviousStoriesProps> = ({ stories }) => {
   return (
      <Div className='col-12 pt-5'>
         <Div className='h2 mb-2'>Previous stories</Div>
         <Div className='row'>
            {stories.map((story, index) => {
               return (
                  <Div key={`previous-story-${index}`} className='col-md-6 mb-4'>
                     <StoryCard
                        story={story}
                        isLatest={false}/>
                  </Div>
               );
            })}
         </Div>
      </Div>
   );
};
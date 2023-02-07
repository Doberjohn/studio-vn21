import { Div } from '../../atoms';
import { IStory } from '../../../interfaces';
import React from 'react';
import { LatestStory, PreviousStories } from '../../organisms';

interface HomeTemplateProps {
   latestStory: IStory;
   previousStories: IStory[];
}

export const BrowseTemplateDesktop = ({ latestStory, previousStories }: HomeTemplateProps) => {
   return (
      <Div className='container'>
         <LatestStory
            story={latestStory}/>
         <Div className='px-0'>
            <PreviousStories
               stories={previousStories}/>
         </Div>
      </Div>
   );
};
import { Div } from '../../atoms';
import { IBrowseTemplate } from '../../../interfaces';
import React from 'react';
import { LatestStory, PreviousStories } from '../../organisms';

export const BrowseTemplateDesktop: React.FC<IBrowseTemplate> =
    ({ latestStory, previousStories }) => {
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
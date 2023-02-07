import { BrowseTemplateDesktop } from './BrowseTemplateDesktop';
import { BrowseTemplateMobile } from './BrowseTemplateMobile';
import { BrowseTemplateTablet } from './BrowseTemplateTablet';
import { Div } from '../../atoms';
import { IStory } from '../../../interfaces';
import React from 'react';
import { LoadingSpinner, TemplateSwitch } from '../../molecules';

interface HomeTemplateProps {
   latestStory: IStory;
   previousStories: IStory[];
   isLoading: boolean;
}

export const BrowseTemplate = ({ isLoading, latestStory, previousStories }: HomeTemplateProps) => {
   return (
      <Div>
         {isLoading ? (
            <Div className='full-height perfectly-centered'>
               <LoadingSpinner/>
            </Div>
         ) : (
            <TemplateSwitch>
               <BrowseTemplateDesktop latestStory={latestStory} previousStories={previousStories}/>
               <BrowseTemplateMobile latestStory={latestStory} previousStories={previousStories}/>
               <BrowseTemplateTablet latestStory={latestStory} previousStories={previousStories}/>
            </TemplateSwitch>
         )}
      </Div>
   );
};
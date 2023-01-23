import { BrowseTemplateDesktop } from './Desktop/BrowseTemplateDesktop';
import { BrowseTemplateMobile } from './Mobile/BrowseTemplateMobile';
import { BrowseTemplateTablet } from './Tablet/BrowseTemplateTablet';
import { Div } from '../../UI/atoms';
import { IStory } from '../../../interfaces';
import React from 'react';
import { LoadingSpinner, TemplateSwitch } from '../../UI/molecules';

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
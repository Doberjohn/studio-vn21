import { BrowseTemplateDesktop } from './BrowseTemplateDesktop';
import { BrowseTemplateMobile } from './BrowseTemplateMobile';
import { BrowseTemplateTablet } from './BrowseTemplateTablet';
import { IBrowseTemplate } from '../../../interfaces';
import React from 'react';
import { TemplateSwitch } from '../../molecules';

export const BrowseTemplate: React.FC<IBrowseTemplate> =
    ({ latestStory, previousStories }) => {
   return (
       <TemplateSwitch>
          <BrowseTemplateDesktop/>
          <BrowseTemplateMobile latestStory={latestStory} previousStories={previousStories}/>
          <BrowseTemplateTablet latestStory={latestStory} previousStories={previousStories}/>
       </TemplateSwitch>
   );
};
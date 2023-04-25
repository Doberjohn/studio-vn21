import { BrowseTemplateDesktop } from './BrowseTemplateDesktop';
import { BrowseTemplateMobile } from './BrowseTemplateMobile';
import { BrowseTemplateTablet } from './BrowseTemplateTablet';
import { IBrowseTemplate } from '../../interfaces';
import React from 'react';
import { TemplateSwitch } from '../../components/molecules';

export const BrowseTemplate: React.FC<IBrowseTemplate> =
    ({ latestStory, categories }) => {
   return (
       <TemplateSwitch>
          <BrowseTemplateDesktop/>
          <BrowseTemplateMobile latestStory={latestStory} categories={categories}/>
          <BrowseTemplateTablet latestStory={latestStory} categories={categories}/>
       </TemplateSwitch>
   );
};
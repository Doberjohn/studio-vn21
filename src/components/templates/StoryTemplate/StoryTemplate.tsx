import { IStoryTemplate } from '../../../interfaces';
import React from 'react';
import { StoryTemplateDesktop } from './StoryTemplateDesktop';
import { StoryTemplateMobile } from './StoryTemplateMobile';
import { StoryTemplateTablet } from './StoryTemplateTablet';
import { TemplateSwitch } from '../../molecules';

export const StoryTemplate: React.FC<IStoryTemplate> = ({ story }) => {
   return (
      <TemplateSwitch>
         <StoryTemplateDesktop/>
         <StoryTemplateMobile story={story}/>
         <StoryTemplateTablet story={story}/>
      </TemplateSwitch>
   );
};
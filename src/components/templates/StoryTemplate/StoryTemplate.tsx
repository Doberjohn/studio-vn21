import { IStory } from '../../../interfaces';
import React from 'react';
import { StoryTemplateDesktop } from './StoryTemplateDesktop';
import { StoryTemplateMobile } from './StoryTemplateMobile';
import { StoryTemplateTablet } from './StoryTemplateTablet';
import { TemplateSwitch } from '../../molecules';

interface ReaderTemplateProps {
   story: IStory;
}

export const StoryTemplate = ({ story }: ReaderTemplateProps) => {
   return (
      <TemplateSwitch>
         <StoryTemplateDesktop story={story}/>
         <StoryTemplateMobile story={story}/>
         <StoryTemplateTablet story={story}/>
      </TemplateSwitch>
   );
};
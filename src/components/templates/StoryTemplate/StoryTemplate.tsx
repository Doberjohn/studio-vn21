import { IStory } from '../../../interfaces';
import React from 'react';
import { StoryTemplateDesktop } from './Desktop/StoryTemplateDesktop';
import { StoryTemplateMobile } from './Mobile/StoryTemplateMobile';
import { StoryTemplateTablet } from './Tablet/StoryTemplateTablet';
import { TemplateSwitch } from '../../UI/molecules';

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
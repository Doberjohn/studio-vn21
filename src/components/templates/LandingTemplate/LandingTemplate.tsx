import { LandingTemplateDesktop } from './Desktop/LandingTemplateDesktop';
import { LandingTemplateMobile } from './Mobile/LandingTemplateMobile';
import { LandingTemplateTablet } from './Tablet/LandingTemplateTablet';
import React from 'react';
import { TemplateSwitch } from '../../UI/molecules';

export const LandingTemplate = ({ ...props }) => {
   return (
      <TemplateSwitch>
         <LandingTemplateMobile {...props}/>
         <LandingTemplateTablet {...props}/>
         <LandingTemplateDesktop {...props}/>
      </TemplateSwitch>
   );
};
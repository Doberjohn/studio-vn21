import { LandingTemplateDesktop } from './LandingTemplateDesktop';
import { LandingTemplateMobile } from './LandingTemplateMobile';
import { LandingTemplateTablet } from './LandingTemplateTablet';
import React from 'react';
import { TemplateSwitch } from '../../molecules';

export const LandingTemplate = ({ ...props }) => {
   return (
      <TemplateSwitch>
         <LandingTemplateDesktop {...props}/>
         <LandingTemplateMobile {...props}/>
         <LandingTemplateTablet {...props}/>
      </TemplateSwitch>
   );
};
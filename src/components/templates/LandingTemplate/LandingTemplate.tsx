import { LandingTemplateDesktop } from './LandingTemplateDesktop';
import { LandingTemplateMobile } from './LandingTemplateMobile';
import { LandingTemplateTablet } from './LandingTemplateTablet';
import React from 'react';
import { TemplateSwitch } from '../../molecules';

export const LandingTemplate: React.FC = () => {
   return (
      <TemplateSwitch>
         <LandingTemplateDesktop/>
         <LandingTemplateMobile/>
         <LandingTemplateTablet/>
      </TemplateSwitch>
   );
};
import React from 'react';
import { usePlatform } from '../../../hooks';

interface TemplateSwitchProps {
   children: JSX.Element[]
}

export const TemplateSwitch: React.FC<TemplateSwitchProps> = ({ children }) => {
   const platform = usePlatform();

   if (platform === 'desktop') return children[0];
   if (platform === 'mobile') return children[1];
   return children[2];
};
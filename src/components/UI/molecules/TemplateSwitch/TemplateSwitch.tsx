import React from 'react';
import { usePlatform } from '../../../../hooks';

interface TemplateSwitchProps {
   children: JSX.Element[]
}

export const TemplateSwitch = ({ children }: TemplateSwitchProps) => {
   const platform = usePlatform();

   if (platform === 'mobile') return children[0];
   if (platform === 'tablet') return children[1];
   return children[2];
};
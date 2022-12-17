import React from 'react';

export const Svg = ({ children, ...rest }: React.SVGProps<SVGSVGElement>) => {
   return (
      <svg {...rest}>
         {children}
      </svg>
   );
};
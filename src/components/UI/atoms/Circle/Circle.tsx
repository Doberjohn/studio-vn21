import React from 'react';

export const Circle = ({ children, ...rest }: React.SVGProps<SVGCircleElement>) => {
   return (
      <circle {...rest}>
         {children}
      </circle>
   );
};
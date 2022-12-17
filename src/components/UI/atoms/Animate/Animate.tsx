import React from 'react';

export const Animate = ({ children, ...rest }: React.SVGProps<SVGElement>) => {
   return (
      <animate {...rest}>
         {children}
      </animate>
   );
};
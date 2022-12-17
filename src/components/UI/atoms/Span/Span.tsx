import React from 'react';

export const Span = ({ children, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => {
   return (
      <span {...rest}>
         {children}
      </span>
   );
};
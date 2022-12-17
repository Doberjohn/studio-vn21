import React from 'react';

export const Div = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <div {...rest}>
         {children}
      </div>
   );
};
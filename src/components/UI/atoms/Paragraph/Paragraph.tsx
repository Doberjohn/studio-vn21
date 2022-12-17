import React from 'react';

export const Paragraph = ({ children, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) => {
   return (
      <p {...rest}>
         {children}
      </p>
   );
};
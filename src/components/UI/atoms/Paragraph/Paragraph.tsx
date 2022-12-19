import React from 'react';

const Paragraph = ({ children, ...rest }: React.HTMLAttributes<HTMLParagraphElement>) => {
   return (
      <p {...rest}>
         {children}
      </p>
   );
};

export default Paragraph;
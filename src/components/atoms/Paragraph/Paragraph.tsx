import React from 'react';

const Paragraph: React.FC<React.HTMLAttributes<HTMLParagraphElement>> = ({ children, ...rest }) => {
   return (
      <p {...rest}>
         {children}
      </p>
   );
};

export default Paragraph;
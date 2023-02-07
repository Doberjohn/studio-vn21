import React from 'react';

const Span: React.FC<React.HTMLAttributes<HTMLSpanElement>> = ({ children, ...rest }) => {
   return (
      <span {...rest}>
         {children}
      </span>
   );
};

export default Span;
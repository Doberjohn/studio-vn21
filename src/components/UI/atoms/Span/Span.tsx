import React from 'react';

const Span = ({ children, ...rest }: React.HTMLAttributes<HTMLSpanElement>) => {
   return (
      <span {...rest}>
         {children}
      </span>
   );
};

export default Span;
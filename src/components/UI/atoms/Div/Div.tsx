import React from 'react';

const Div = ({ children, ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
   return (
      <div {...rest}>
         {children}
      </div>
   );
};

export default Div;
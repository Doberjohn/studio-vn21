import React from 'react';

const Div: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...rest }) => {
   return (
      <div {...rest}>
         {children}
      </div>
   );
};

export default Div;
import React from 'react';

const Animate: React.FC<React.SVGProps<SVGElement>> = ({ children, ...rest }) => {
   return (
      <animate {...rest}>
         {children}
      </animate>
   );
};

export default Animate;
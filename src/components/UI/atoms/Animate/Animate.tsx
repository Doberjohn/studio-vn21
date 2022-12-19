import React from 'react';

const Animate = ({ children, ...rest }: React.SVGProps<SVGElement>) => {
   return (
      <animate {...rest}>
         {children}
      </animate>
   );
};

export default Animate;
import React from 'react';

const Circle = ({ children, ...rest }: React.SVGProps<SVGCircleElement>) => {
   return (
      <circle {...rest}>
         {children}
      </circle>
   );
};

export default Circle;
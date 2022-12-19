import React from 'react';

const Svg = ({ children, ...rest }: React.SVGProps<SVGSVGElement>) => {
   return (
      <svg {...rest}>
         {children}
      </svg>
   );
};

export default Svg;
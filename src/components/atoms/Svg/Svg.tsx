import React from 'react';

const Svg: React.FC<React.SVGProps<SVGSVGElement>> = ({ children, ...rest }) => {
   return (
      <svg {...rest}>
         {children}
      </svg>
   );
};

export default Svg;
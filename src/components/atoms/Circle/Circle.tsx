import React from 'react';

const Circle: React.FC<React.SVGProps<SVGCircleElement>> = ({ children, ...rest }) => {
   return (
      <circle {...rest}>
         {children}
      </circle>
   );
};

export default Circle;
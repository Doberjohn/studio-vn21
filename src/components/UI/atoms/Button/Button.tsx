import React from 'react';
import styled from 'styled-components';

const StudioButton = styled.button`
  color: var(--bs-dark);
`;

const Button = ({ children, ...rest }: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
   return (
      <StudioButton {...rest}>
         {children}
      </StudioButton>
   );
};

export default Button;
import React from 'react';
import styled from 'styled-components';

const ButtonsBoxWrapper = styled.div`
  width: 100%;
  display: inline-grid;
  grid-template-columns: repeat(5, auto);
  place-items: center;
`;

const ButtonsBox = ({ children }: React.HTMLAttributes<HTMLDivElement>) => {
   return <ButtonsBoxWrapper>{children}</ButtonsBoxWrapper>;
};

export default ButtonsBox;
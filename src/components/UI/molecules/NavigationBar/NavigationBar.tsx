import elizabeth from '../../../../shared/assets/elizabeth.png';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../../../../hooks';
import { Div, Image } from '../../atoms';

export const NavigationBar = () => {
   const navigate = useNavigate();
   const platform = usePlatform();

   return (
      <StudioNavbar className='navbar navbar-dark bg-dark'>
         <Div className={`container ${platform === 'mobile' ? 'justify-content-center' : ''}`}>
            <Div className='navbar-brand text-center cursor-pointer d-flex align-items-center'
                 onClick={() => navigate('/')}>
               <Image
                  width='40'
                  height='40'
                  sourceImageUrl={elizabeth}
                  alternativeText='elizabeth'
                  className='d-inline-block align-top'/>
               <StudioBrandName className='ms-2'>Studio VN21</StudioBrandName>
            </Div>
         </Div>
      </StudioNavbar>
   );
};

const StudioNavbar = styled.span`
  position: fixed;
  z-index: 11;
  width: 100vw;
`;

const StudioBrandName = styled.span`
  font-size: 24px;
`;
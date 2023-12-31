import elizabeth from '../../../shared/assets/elizabeth.png';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../../../hooks';
import { Div, Image } from '../../atoms';

export const NavigationBar: React.FC = () => {
   const navigate = useNavigate();
   const platform = usePlatform();

   // hide navbar in landing page
   if (window.location.pathname === '/') return null;

   return (
      <StudioNavbar className='navbar navbar-dark bg-dark'>
         <Div className={`container ps-0 ${platform === 'mobile' ? 'justify-content-center' : ''}`}>
            <Div className='navbar-brand text-center d-flex align-items-center'>
               <Div className='d-flex align-items-center'>
                  <Image
                     width='40'
                     height='40'
                     sourceImageUrl={elizabeth}
                     alternativeText='elizabeth'
                     className='d-inline-block align-top'/>
                  <StudioBrandName
                     className='ms-2 cursor-pointer'
                     onClick={() => navigate('/browse')}>
                     Studio VN21
                  </StudioBrandName>
               </Div>
               {platform !== 'mobile' && (
                  <AppVersion>Version: {process.env.REACT_APP_VERSION}</AppVersion>
               )}
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

const AppVersion = styled.span`
  position: absolute;
  right: 30px;
  font-style: italic;
`;
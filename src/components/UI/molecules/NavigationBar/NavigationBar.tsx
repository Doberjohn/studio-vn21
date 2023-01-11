import elizabeth from '../../../../shared/assets/elizabeth.png';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../../../../hooks';
import { Div, Image, Span } from '../../atoms';

const StudioNavbar = styled.span`
  position: fixed;
  z-index: 11;
  width: 100vw;
`;

const StudioBrandName = styled.span`
  font-size: 24px;
`;

export const NavigationBar = () => {
   const navigate = useNavigate();
   const platform = usePlatform();
   const isPreviewEnv = process.env.REACT_APP_VERCEL_ENV === 'preview';

   // hide navbar in landing page
   if (window.location.pathname === '/') return null;

   return (
      <StudioNavbar className='navbar navbar-dark bg-dark'>
         <Div className={`container ps-0 ${platform === 'mobile' ? 'justify-content-center' : ''}`}>
            <Div className='navbar-brand text-center cursor-pointer d-flex align-items-center'
                 onClick={() => navigate('/browse')}>
               <Div className='d-flex align-items-center'>
                  <Image
                     width='40'
                     height='40'
                     sourceImageUrl={elizabeth}
                     alternativeText='elizabeth'
                     className='d-inline-block align-top'/>
                  <StudioBrandName className='ms-2'>Studio VN21</StudioBrandName>
               </Div>
               {!isPreviewEnv && (
                  <Span style={{ position: 'absolute', right: 30, fontStyle: 'italic' }}>{process.env.REACT_APP_VERSION}@alpha</Span>
               )}
            </Div>
         </Div>
      </StudioNavbar>
   );
};
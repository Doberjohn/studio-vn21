import { Div } from '../../../UI/atoms';
import landingPageArt from '../../../../shared/assets/landingPageArt.webp';
import React from 'react';
import styled from 'styled-components';
import { WelcomeSection } from '../../../UI/molecules';

const LandingPageArtCover = styled.div`
  background-image: url(${landingPageArt});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

export const LandingTemplateDesktop = () => {
   return (
      <Div className='full-width'>
         <Div className='row'>
            <Div className='col-5'>
               <WelcomeSection/>
            </Div>
            <LandingPageArtCover className='col'/>
         </Div>
      </Div>
   );
};
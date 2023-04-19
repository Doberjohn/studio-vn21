import { Div } from '../../atoms';
import { landingPageArt } from '../../../shared';
import React from 'react';
import styled from 'styled-components';
import { WelcomeSection } from '../../molecules';

export const LandingTemplateDesktop: React.FC = () => {
   return (
      <Div className='overflow-hidden'>
         <Div className='row'>
            <Div className='col-5'>
               <WelcomeSection canStartReading={false}/>
            </Div>
            <LandingPageArtCover className='col'/>
         </Div>
      </Div>
   );
};

const LandingPageArtCover = styled.div`
  background-image: url(${landingPageArt});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;
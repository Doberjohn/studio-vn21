import landingPageArt from '../../../shared/assets/landingPageArt.webp';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../../../hooks';
import { Button, Div } from '../../UI/atoms';

const ArtCoverWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const LandingPageArtCover = styled.div`
  background-image: url(${landingPageArt});
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

export const LandingTemplate = () => {
   const platform = usePlatform();
   const navigate = useNavigate();
   return (
      <Div className='container' style={{ maxWidth: '100vw' }}>
         <Div className='row'>
            <Div className='col-12 col-xl-5'>
               <ArtCoverWrapper>
                  <Div className='h1 mb-4'>
                     Welcome to Studio VN21
                  </Div>
                  <Div className='h5 mb-5'>
                     The best place to read short stories online
                  </Div>
                  <Button
                     className='btn btn-light btn-lg'
                     onClick={() => navigate('/browse')}>
                     Start reading now
                  </Button>
               </ArtCoverWrapper>
            </Div>
            { platform === 'desktop' && (
               <LandingPageArtCover className='col'/>
            ) }
         </Div>
      </Div>
   );
};
import landingPageArt from '../../../shared/assets/landingPageArt.webp';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button, Div } from '../../UI/atoms';

const LandingPageArtCover = styled.img`
  top: 0;
  right: 0;
  height: 100vh;
  position: absolute;
`;

const ArtCoverWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 2rem;
`;

const BrowseCollectionButton = styled(Button)``;

export const LandingTemplate = () => {
   const navigate = useNavigate();
   return (
      <ArtCoverWrapper>
         <LandingPageArtCover src={landingPageArt}/>
         <Div className='text-center'>
            <Div className='h1 mb-4' style={{ transform: 'scale(1.5)' }}>Welcome to Studio VN21</Div>
            <Div className='h5 mb-5' style={{ transform: 'scale(1.3)' }}>The best place on the Internet to read short stories</Div>
            <BrowseCollectionButton
               className='btn btn-light btn-lg'
               onClick={() => navigate('/browse')}>
               Start reading now
            </BrowseCollectionButton>
         </Div>
      </ArtCoverWrapper>
   );
};
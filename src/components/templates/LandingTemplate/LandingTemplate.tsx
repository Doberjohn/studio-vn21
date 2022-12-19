import { Button } from '../../UI/atoms';
import landingPageArt from '../../../shared/assets/landingPageArt.jpg';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const coverArtConfig = {
   width: '100vw'
};

const LandingPageArtCover = styled.div`
  width: ${coverArtConfig.width};
  height: 50vh;
  background-size: cover;
  background-position: 75% 75%;
  background-image: url(${landingPageArt});
`;

const ArtCoverWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LandingTemplate = () => {
   const navigate = useNavigate();
   return (
      <ArtCoverWrapper>
         <LandingPageArtCover/>
         <Button
            className='btn btn-light btn-lg position-absolute'
            onClick={() => navigate('/browse')}>
            Browse collection
         </Button>
      </ArtCoverWrapper>
   );
};
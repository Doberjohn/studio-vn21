import { Button } from '../../UI/atoms';
import landingPageArt from '../../../shared/assets/landingPageArt.jpg';
import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const coverArtConfig = {
   width: '100vw',
   height: '50vh',
   mode: 'cover',
   posX: '75%',
   posY: '75%',
};

const LandingPageArtCover = styled.div`
  width: ${coverArtConfig.width};
  height: ${coverArtConfig.height};
  background-size: ${coverArtConfig.mode};
  background-position-x: ${coverArtConfig.posX};
  background-position-y: ${coverArtConfig.posY};
  background-image: url(${landingPageArt});
`;

const ArtCoverWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const BrowseCollectionButton = styled(Button)``;

export const LandingTemplate = () => {
   const navigate = useNavigate();
   return (
      <ArtCoverWrapper>
         <LandingPageArtCover/>
         <BrowseCollectionButton
            className='btn btn-light btn-lg position-absolute'
            onClick={() => navigate('/browse')}>
            Browse collection
         </BrowseCollectionButton>
      </ArtCoverWrapper>
   );
};
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
  position: relative;
`;

const BrowseCollectionButton = styled(Button)`
  top: 70%;
  width: 160px;
  left: calc(50% - 80px);
  position: absolute;
`;

export const LandingTemplate = () => {
   const navigate = useNavigate();
   return (
      <ArtCoverWrapper>
         <LandingPageArtCover/>
         <BrowseCollectionButton
            className='btn btn-light'
            onClick={() => navigate('/browse')}>
            Browse collection
         </BrowseCollectionButton>
      </ArtCoverWrapper>
   );
};
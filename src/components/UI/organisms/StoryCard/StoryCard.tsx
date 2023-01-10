import { Div } from '../../atoms';
import { IStory } from '../../../../interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from '../../../../shared/assets/storyLoadingArt.webp';
import styled from 'styled-components';
import { usePlatform } from '../../../../hooks';
import React, { useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

// const CardTitle = styled.div`
//   position: absolute;
//   left: 0;
//   bottom: 0;
//   background: black;
//   width: 100%;
//   padding: 10px;
//   opacity: 0.8;
// `;

interface IStoryCard extends React.HTMLAttributes<Element> {
   story: IStory,
   isLatest: boolean,
   onClickAction?: (storyId: string) => void,
}

export const StoryCard = (
   { story: { title, storyId, imageUrl }, isLatest, onClickAction }: IStoryCard) => {
   const platform = usePlatform();

   const [latestCoverHeight, setLatestCoverHeight] = useState(platform === 'mobile' ? '200px' : '550px');
   const [previousCoverHeight, setPreviousCoverHeight] = useState(platform === 'mobile' ? '200px' : '270px');

   const afterCoverLoaded = () => {
      setLatestCoverHeight('initial');
      setPreviousCoverHeight('initial');
   };

   const onClick = () => {
      if (onClickAction) {
         onClickAction(storyId);
      }
   };

   return (
      <Div className={`position-relative mt-0 px-0 ${onClickAction ? 'cursor-pointer' : ''}`} onClick={onClick}>
         <Div>
            <LazyLoadImage
               afterLoad={afterCoverLoaded}
               width='100%'
               height={ isLatest ? latestCoverHeight : previousCoverHeight}
               placeholderSrc={PlaceholderImage}
               src={imageUrl}
               effect='blur'
               alt={title}/>
            {/*<CardTitle className={`${isLatest ? 'h1' : 'h5'} mb-0`}>{title}</CardTitle>*/}
         </Div>
      </Div>
   );
};
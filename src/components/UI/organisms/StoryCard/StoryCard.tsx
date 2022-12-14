import { Div } from '../../atoms';
import { IStory } from '../../../../interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from '../../../../shared/assets/background.webp';
import { usePlatform } from '../../../../hooks';
import React, { useState } from 'react';
import './StoryCard.css';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface IStoryCard extends React.HTMLAttributes<Element> {
   story: IStory,
   isLatest: boolean,
   onClickAction?: (storyId: string) => void,
}

export const StoryCard = (
   { story: { title, subtitle, storyId, imageUrl }, isLatest, onClickAction }: IStoryCard) => {
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
            <Div className={'small-card_title mb-0'}>
               <Div className={`${isLatest ? 'h1 ms-0 mb-2' : 'h4 mb-0'}`}>{title}</Div>
               {isLatest && (
                  <Div className={`${platform === 'mobile' ? 'h6' : 'h5'} ms-0 mb-0`}>{subtitle}</Div>
               )}
            </Div>
         </Div>
      </Div>
   );
};
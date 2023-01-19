import { Div } from '../../atoms';
import { IStory } from '../../../../interfaces';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import PlaceholderImage from '../../../../shared/assets/storyLoadingArt.webp';
import { useNavigate } from 'react-router-dom';
import { usePlatform } from '../../../../hooks';
import React, { useState } from 'react';
import 'react-lazy-load-image-component/src/effects/blur.css';

interface IStoryCard extends React.HTMLAttributes<Element> {
   story: IStory,
   isLatest: boolean,
}

export const StoryCard = (
   { story: { title, storyId, imageUrl }, isLatest }: IStoryCard) => {
   const platform = usePlatform();
   const navigate = useNavigate();

   const [latestCoverHeight, setLatestCoverHeight] =
      useState(platform === 'mobile' ? '200px' : '550px');
   const [previousCoverHeight, setPreviousCoverHeight] = useState(platform === 'mobile' ? '200px' : '270px');

   const afterCoverLoaded = () => {
      setLatestCoverHeight('initial');
      setPreviousCoverHeight('initial');
   };

   const onClick = () => {
      navigate(`/story/${storyId}`);
   };

   return (
      <Div className='position-relative mt-0 px-0 cursor-pointer' onClick={onClick}>
         <Div>
            <LazyLoadImage
               afterLoad={afterCoverLoaded}
               width='100%'
               height={ isLatest ? latestCoverHeight : previousCoverHeight}
               placeholderSrc={PlaceholderImage}
               src={imageUrl}
               effect='blur'
               alt={title}/>
         </Div>
      </Div>
   );
};
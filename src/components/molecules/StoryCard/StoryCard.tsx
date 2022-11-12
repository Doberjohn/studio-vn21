import './StoryCard.css';
import React, {useState} from "react";
import {Anchor, Div} from "../../atoms";
import {IStory} from "../../../interfaces";
import useAnalyticsEventTracker from "../../../hooks/useAnalyticsEventTracker";
import { LazyLoadImage } from "react-lazy-load-image-component";
import PlaceholderImage from "../../../shared/assets/background.webp";
import 'react-lazy-load-image-component/src/effects/blur.css';
import {usePlatform} from "../../../hooks/usePlatform";

interface IStoryCard extends React.HTMLAttributes<Element> {
   story: IStory,
   isLatest: boolean,
}

export const StoryCard = ({story: {title, subtitle, imageUrl, externalReadLink}, isLatest, ...rest}: IStoryCard) => {
   const platform = usePlatform();
   const gaEventTracker = useAnalyticsEventTracker('Story');
   const [latestCoverHeight, setLatestCoverHeight] = useState(platform === 'mobile' ? '200px' : '550px');
   const [previousCoverHeight, setPreviousCoverHeight] = useState(platform === 'mobile' ? '200px' : '270px');

   const trackOpenEvent = () => {
      gaEventTracker("Read on Medium", title);
   }

   const afterCoverLoaded = () => {
      setLatestCoverHeight('initial');
      setPreviousCoverHeight('initial');
   }

   return (
      <Div {...rest} style={{position: 'relative'}}>
         <Anchor onClick={trackOpenEvent} destinationUrl={externalReadLink}>
            <LazyLoadImage
               afterLoad={afterCoverLoaded}
               width='100%'
               height={ isLatest ? latestCoverHeight : previousCoverHeight}
               placeholderSrc={PlaceholderImage}
               src={imageUrl}
               className="card-img-top"
               effect="blur"
               alt={title}/>
            <Div className={'small-card_title mb-0'}>
               <Div className={`${isLatest ? 'h1 ms-3 mb-2' : 'h5'} mb-0`}>{title}</Div>
               {isLatest && (
                  <Div className={'h4 ms-3'}>{subtitle}</Div>
               )}
            </Div>
         </Anchor>
      </Div>
   )
}
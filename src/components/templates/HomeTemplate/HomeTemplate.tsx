import { Div } from '../../atoms';
import { IStory } from '../../../interfaces';
import React from 'react';
// import useAnalyticsEventTracker from '../../../hooks/useAnalyticsEventTracker';
import { useNavigate } from 'react-router-dom';
import { LatestStory, PreviousStories } from '../../organisms';

interface HomeTemplateProps {
   latestStory: IStory;
   stories: IStory[];
}

export const HomeTemplate = ({ latestStory, stories }: HomeTemplateProps) => {
   const navigate = useNavigate();
   // const gaEventTracker = useAnalyticsEventTracker('Story');

   const openStoryInternally = () => {
      navigate('reader/the-spark-of-creativity');
      // gaEventTracker('Read on site', title);
   };

   return (
      <Div>
         <Div className='container narrow-container full-height py-5'>
            <Div className='row'>
               <Div className='col-lg-12 py-5'>
                  <LatestStory story={latestStory} onClickAction={openStoryInternally}/>
               </Div>
               <Div className='col-lg-12 py-lg-5 text-start'>
                  <PreviousStories stories={stories} onClickAction={openStoryInternally}/>
               </Div>
            </Div>
         </Div>
      </Div>
   );
};
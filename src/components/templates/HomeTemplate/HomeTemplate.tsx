import { IStory } from '../../../interfaces';
import React from 'react';
// import useAnalyticsEventTracker from '../../../hooks/useAnalyticsEventTracker';
import { useNavigate } from 'react-router-dom';
import { Div, LoadingSpinner } from '../../UI/atoms';
import { LatestStory, PreviousStories } from '../../UI/organisms';

interface HomeTemplateProps {
   latestStory: IStory;
   previousStories: IStory[];
   isLoading: boolean;
}

export const HomeTemplate = ({ latestStory, previousStories, isLoading }: HomeTemplateProps) => {
   const navigate = useNavigate();
   // const gaEventTracker = useAnalyticsEventTracker('Story');

   const openStoryInternally = (storyId: string) => {
      navigate(`reader/${storyId}`);
      // gaEventTracker('Read on site', title);
   };

   if (isLoading) return (
      <Div className='perfecty-centered full-height'>
         <LoadingSpinner size={300}/>
      </Div>
   );
   
   return (
      <Div>
         <Div className='container narrow-container full-height pt-5'>
            <Div className='row'>
               <Div className='col-lg-12 py-5'>
                  <LatestStory story={latestStory} onClickAction={openStoryInternally}/>
               </Div>
               <Div className='col-lg-12 py-lg-5 text-start'>
                  <PreviousStories stories={previousStories} onClickAction={openStoryInternally}/>
               </Div>
            </Div>
         </Div>
      </Div>
   );
};
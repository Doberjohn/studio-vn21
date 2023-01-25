import { Div } from '../../atoms';
import { IStory } from '../../../../interfaces';
import React from 'react';
import { StoryCard } from '../StoryCard/StoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface StorySliderProps {
   title: string;
   stories: IStory[],
   storiesPerView: number;
   spaceBetweenStories: number;
}

export const StorySlider = (
   {
      title,
      stories,
      storiesPerView,
      spaceBetweenStories
   }: StorySliderProps) => {
   return (
      <Div>
         <Div className='h5'>{title}</Div>
         <Swiper spaceBetween={spaceBetweenStories} slidesPerView={storiesPerView}>
            {stories.map((story) => {
               return (
                  <SwiperSlide key={`slide-${story.storyId}`}>
                     <StoryCard story={story} isLatest={false} useMobileCover={true}/>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </Div>
   );
};
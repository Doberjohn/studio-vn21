import { Div } from '../../atoms';
import { IStory } from '../../../../interfaces';
import React from 'react';
import { StoryCard } from '../StoryCard/StoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface StorySliderProps {
   title: string;
   stories: IStory[],
}

export const StorySlider = ({ title, stories }: StorySliderProps) => {
   return (
      <Div>
         <Div className='h5'>{title}</Div>
         <Swiper spaceBetween={20} slidesPerView={3}>
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
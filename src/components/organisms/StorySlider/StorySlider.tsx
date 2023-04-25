import { Div } from '../../atoms';
import { FreeMode } from 'swiper';
import { IStoryThumbnail } from '../../../interfaces';
import React from 'react';
import { StoryCard } from '../StoryCard/StoryCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

interface StorySliderProps {
   title: string;
   stories: IStoryThumbnail[],
   storiesPerView: number;
   spaceBetweenStories: number;
}

export const StorySlider: React.FC<StorySliderProps> =
    ({ title, stories, storiesPerView, spaceBetweenStories }) => {
   return (
      <Div>
         <Div className='h4'>{title}</Div>
         <Swiper
            modules={[FreeMode]}
            freeMode={{ enabled: true, sticky: false }}
            spaceBetween={spaceBetweenStories}
            slidesPerView={storiesPerView}>
               {stories.map((story) => {
                  return (
                     <SwiperSlide key={`slide-${story.storyId}`}>
                        <StoryCard story={story} isLatest={false} useMobileCover={true}/>
                     </SwiperSlide>
                  );
               })
            }
         </Swiper>
      </Div>
   );
};
import { Div } from '../../components/atoms';
import { IBrowseTemplate } from '../../interfaces';
import React from 'react';
import { LatestStory, StorySlider } from '../../components/organisms';

export const BrowseTemplateTablet: React.FC<IBrowseTemplate> =
   ({ latestStory, categories }) => {
      const storiesPerView = 2.5;
      const spaceBetweenStories = 25;
      return (
         <Div className='container pb-3'>
            <LatestStory
               story={latestStory}/>
            {categories.map((category) => {
               return (
                  <Div className='ps-3 pt-4'>
                     <StorySlider
                        title={category.title}
                        stories={category.stories}
                        storiesPerView={storiesPerView}
                        spaceBetweenStories={spaceBetweenStories}/>
                  </Div>
               );
            })}
         </Div>
      );
   };
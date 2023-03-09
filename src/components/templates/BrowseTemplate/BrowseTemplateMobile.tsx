import { Div } from '../../atoms';
import { IBrowseTemplate } from '../../../interfaces';
import React from 'react';
import { LatestStory, StorySlider } from '../../organisms';

export const BrowseTemplateMobile: React.FC<IBrowseTemplate> =
    ({ latestStory, previousStories }) => {
   const storiesPerView = 2.5;
   const spaceBetweenStories = 20;

   const scaryStories = previousStories.filter((story) => {
      return story.storyId === 'dystopian_lab' ||
         story.storyId === 'pumpkins_wink' ||
         story.storyId === 'night_of_the_monsters' ||
         story.storyId === 'the_man_in_the_window' ||
         story.storyId === 'the_reflection';
   });

   const drabbles = previousStories.filter((story) => {
      return story.storyId === 'abyss' ||
         story.storyId === 'a_spark_of_creativity'||
         story.storyId === 'healing_touch';
   });

   const storiesForImpact = previousStories.filter((story) => {
      return story.storyId === 'christmas_aftermath' ||
         story.storyId === 'dear_mother_1' ||
         story.storyId === 'maybe_she_was_lucky';
   });

   const bloodNMetalStories = previousStories.filter((story) => {
      return story.storyId === '75th_floor' ||
         story.storyId === 'safer_passage_1' ||
         story.storyId === 'what_happens_in_the_dark_1';
   });

   return (
      <Div className='container pb-3'>
         <LatestStory
            story={latestStory}/>
         <Div className='ps-3 pt-4'>
            <StorySlider
               title='Scary stories to keep you awake'
               stories={scaryStories}
               storiesPerView={storiesPerView}
               spaceBetweenStories={spaceBetweenStories}/>
         </Div>
         <Div className='ps-3 pt-4'>
            <StorySlider
               title='100-word drabbles for speed readers'
               stories={drabbles}
               storiesPerView={storiesPerView}
               spaceBetweenStories={spaceBetweenStories}/>
         </Div>
         <Div className='ps-3 pt-4'>
            <StorySlider
               title='Stories for impact'
               stories={storiesForImpact}
               storiesPerView={storiesPerView}
               spaceBetweenStories={spaceBetweenStories}/>
         </Div>
         <Div className='ps-3 pt-4'>
            <StorySlider
               title='Vampires vs Cyborgs'
               stories={bloodNMetalStories}
               storiesPerView={storiesPerView}
               spaceBetweenStories={spaceBetweenStories}/>
         </Div>
      </Div>
   );
};
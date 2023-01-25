import { Div } from '../../../UI/atoms';
import { IStory } from '../../../../interfaces';
import React from 'react';
import { LatestStory, StorySlider } from '../../../UI/organisms';

interface HomeTemplateProps {
   latestStory: IStory;
   previousStories: IStory[];
}

export const BrowseTemplateMobile = ({ latestStory, previousStories }: HomeTemplateProps) => {
   const scaryStories = previousStories.filter((story) => {
      return story.storyId === 'dystopian_lab' ||
         story.storyId === 'pumpkins_wink' ||
         story.storyId === 'night_of_the_monsters' ||
         story.storyId === 'the_man_in_the_window' ||
         story.storyId === 'the_reflection';
   });

   const drabbles = previousStories.filter((story) => {
      return story.storyId === 'abyss' ||
         story.storyId === 'a_spark_of_creativity';
   });

   const storiesForImpact = previousStories.filter((story) => {
      return story.storyId === 'christmas_aftermath' ||
         story.storyId === 'dear_mother_1' ||
         story.storyId === 'maybe_she_was_lucky';
   });

   const bloodNMetalStories = previousStories.filter((story) => {
      return story.storyId === '75th_floor' ||
         story.storyId === 'safer_passage_1';
   });

   return (
      <Div className='container pb-3'>
         <LatestStory
            story={latestStory}/>
         <Div className='ps-3 pt-4'>
            <StorySlider
               title='Scary stories to keep you awake'
               stories={scaryStories}/>
         </Div>
         <Div className='ps-3 pt-4'>
            <StorySlider
               title='100-word drabbles for speed readers'
               stories={drabbles}/>
         </Div>
         <Div className='ps-3 pt-4'>
            <StorySlider
               title='Stories for impact'
               stories={storiesForImpact}/>
         </Div>
         <Div className='ps-3 pt-4'>
            <StorySlider
               title='Vampires vs Cyborgs'
               stories={bloodNMetalStories}/>
         </Div>
      </Div>
   );
};
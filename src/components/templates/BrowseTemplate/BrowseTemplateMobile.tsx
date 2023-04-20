import { Div } from '../../atoms';
import { IBrowseTemplate } from '../../../interfaces';
import React from 'react';
import { LatestStory, StorySlider } from '../../organisms';

export const BrowseTemplateMobile: React.FC<IBrowseTemplate> =
   ({ latestStory, previousStories }) => {
      const storiesPerView = 2.5;
      const spaceBetweenStories = 25;

      const scaryStories = previousStories.filter((story) => {
         return story.storyId === 'the_man_in_the_window' ||
            story.storyId === 'haunted_pumpkin_patch' ||
            story.storyId === 'the_reflection';
      });

      const drabbles = previousStories.filter((story) => {
         return story.storyId === 'abyss' ||
            story.storyId === 'a_spark_of_creativity' ||
            story.storyId === 'spellbent' ||
            story.storyId === 'healing_touch';
      });

      const poems = previousStories.filter((story) => {
         return story.storyId === 'dystopian_lab' ||
            story.storyId === 'dark_alliance' ||
            story.storyId === 'night_of_the_monsters';
      });

      const storiesForImpact = previousStories.filter((story) => {
         return story.storyId === 'primeval_why' ||
            story.storyId === 'dear_mother_1' ||
            story.storyId === 'the_price_of_freedom';
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
                  title={'Rhyme Time: Poet\'s corner'}
                  stories={poems}
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
         </Div>
      );
   };
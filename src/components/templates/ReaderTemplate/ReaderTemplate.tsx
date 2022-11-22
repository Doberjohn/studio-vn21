import { IStory } from '../../../interfaces';
import React from 'react';
import { AudioPlayer, StoryCard } from '../../organisms';
import { Div, Paragraph } from '../../atoms';

interface ReaderTemplateProps {
   story: IStory;
}

const tracks = [
   {
      url: 'https://audioplayer.madza.dev/Madza-Chords_of_Life.mp3',
      title: 'Madza - Chords of Life',
      tags: ['house'],
   },
   {
      url: 'https://audioplayer.madza.dev/Madza-Late_Night_Drive.mp3',
      title: 'Madza - Late Night Drive',
      tags: ['dnb'],
   },
   {
      url: 'https://audioplayer.madza.dev/Madza-Persistence.mp3',
      title: 'Madza - Persistence',
      tags: ['dubstep'],
   },
];

export const ReaderTemplate = ({ story }: ReaderTemplateProps) => {
   if (!story) return null;
   const contentParts = story.content.split(/[\n]/g).filter((entry) => entry !== '');

   window.scrollTo({ top: 0, left:0, behavior: 'auto' });
   return (
      <Div className='container narrow-container pt-5'>
         <AudioPlayer trackList={tracks}/>
         <Div className='row pt-2 pb-4'>
            <StoryCard
               story={story}
               isLatest={true}/>
         </Div>
         <Div className='row'>
            <Div className='col-md-8 h5 px-3 mb-0'>
               {contentParts.map((part, index) => {
                  return (
                     <Paragraph key={`story-part-${index}`}>{part}</Paragraph>
                  );
               })}
            </Div>
            <Div className='col-md-4' style={{ borderLeft: '1px solid' }}>
               <Div></Div>
            </Div>
         </Div>
      </Div>
   );
};
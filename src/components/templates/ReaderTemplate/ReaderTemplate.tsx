import { Div } from '../../atoms';
import { IStory } from '../../../interfaces';
import { AudioPlayer, StoryCard } from '../../organisms';
import React, { useEffect, useState } from 'react';

interface ReaderTemplateProps {
   story: IStory;
}

export const ReaderTemplate = ({ story }: ReaderTemplateProps) => {
   if (!story) return null;

   const [selectedWord, setSelectedWord] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);

   let intervals: number[];
   if (story.transcript) {
      intervals = story.transcript.timestamps;
   }

   const time = (interval: number) => {
      setTimeout(() => {
         if (selectedWord <= intervals.length) {
            setSelectedWord(selectedWord + 1);
         }
      }, interval);
   };

   useEffect(() => {
      window.scrollTo({ top: 0, left:0, behavior: 'auto' });
   }, []);

   useEffect(() => {
      if (story.transcript && selectedWord > 0) {
         time(intervals[selectedWord] - intervals[selectedWord - 1] - 25);
      }
   }, [selectedWord]);

   useEffect(() => {
      if (story.transcript && isPlaying) {
         time(intervals[selectedWord] - 100);
      }
   }, [isPlaying]);

   return (
      <Div className='container narrow-container pt-5'>
         <Div className='row pt-2'>
            <StoryCard
               story={story}
               isLatest={true}/>
         </Div>
         <Div className='row py-4 px-3'>
            {story.voiceoverUrl && (
               <AudioPlayer
                  setIsPlaying={setIsPlaying}
                  trackList={[{
                     url: story.voiceoverUrl,
                     title: `Studio VN21 - ${story.title}`,
                     tags: ['house'],
                  },
               ]}/>
            )}
         </Div>
         <Div className='row'>
            <Div className='col-md-8 h5 px-3 mb-0'>
               {story.content.map((paragraph, paragraphIndex) => {
                  return (
                     <Div key={`paragraph-${paragraphIndex}`} className='mb-3'>{
                        paragraph.split(' ').map((word, wordIndex) => {
                           return <Div key={`paragraph-${paragraphIndex}-word-${wordIndex}`}
                                       className='d-inline-block p-1' style={
                              {
                                 backgroundColor: isPlaying && selectedWord === wordIndex ? 'rgba(255, 85, 0, 0.8)' : 'initial'
                              }
                           } >{word}</Div>;
                        })
                     }</Div>
               );
               })}
            </Div>
            <Div className='col-md-4' style={{ borderLeft: '1px solid' }}/>
         </Div>
      </Div>
   );
};
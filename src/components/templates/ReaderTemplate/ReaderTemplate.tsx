import { Div } from '../../atoms';
import { IStory } from '../../../interfaces';
import { AudioPlayer, StoryCard } from '../../organisms';
import React, { useEffect, useState } from 'react';

interface ReaderTemplateProps {
   story: IStory;
}

export const ReaderTemplate = ({ story }: ReaderTemplateProps) => {
   if (!story) return null;
   const storyParagraphs = story.content.split(/[\n]/g).filter((entry) => entry !== '');
   const [selectedWord, setSelectedWord] = useState(0);
   const intervals = [
      600, 900, 1200, 1400, 2500, 2700, 3100,
      3400, 3600, 4500, 4600, 5000, 5400, 5500,
      5700, 6100, 6300, 6700, 7000, 7500, 7600,
      7700, 8100, 8800, 9000, 9200, 9500, 10200,
      10600, 10800, 10900, 11300, 11600, 11700,
      12100, 12200, 12300, 12500, 13400, 13800,
      14200, 14400, 14700, 15000, 15400, 16000,
      16200, 16700];
   const [isPlaying, setIsPlaying] = useState(false);
   const time = (interval: number) => {
      setTimeout(() => {
         if (selectedWord <= intervals.length) {
            setSelectedWord(selectedWord + 1);
         }
      }, interval);
   };

   useEffect(() => {
      if (selectedWord > 0) {
         time(intervals[selectedWord] - intervals[selectedWord - 1] - 25);
      }
   }, [selectedWord]);

   useEffect(() => {
      if (isPlaying) {
         time(intervals[selectedWord] - 100);
      }
   }, [isPlaying]);

   useEffect(() => {
      window.scrollTo({ top: 0, left:0, behavior: 'auto' });
   }, []);

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
            <Div className='col-md-8 h5 px-3 mb-0' style={{ userSelect: 'none' }}>
               {storyParagraphs.map((paragraph, paragraphIndex) => {
                  return (
                     <Div key={`paragraph-${paragraphIndex}`} className='mb-3'>{
                        paragraph.split(' ').map((word, wordIndex) => {
                           return <Div key={`paragraph-${paragraphIndex}-word-${wordIndex}`}
                                       className='d-inline-block p-1' style={
                              {
                                 backgroundColor: selectedWord === wordIndex ? 'rgba(255, 85, 0, 0.8)' : 'initial'
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
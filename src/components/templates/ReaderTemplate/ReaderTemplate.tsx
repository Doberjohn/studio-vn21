import { Div } from '../../atoms';
import { IStory } from '../../../interfaces';
import React, { useEffect, useState } from 'react';
import { StoryCard, VOPlayer } from '../../organisms';

interface ReaderTemplateProps {
   story: IStory;
}

export const ReaderTemplate = ({ story }: ReaderTemplateProps) => {
   if (!story) return null;
   const storyWords = story.content.map((paragraph) => paragraph.split( ' '));
   const wordElements = storyWords.flat().map((word, index) => {
      return {
         word,
         index
      };
   });

   const [selectedWord, setSelectedWord] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [lastVOPosition, setLastVOPosition] = useState(0);

   const timestamps = story.transcript ? story.transcript.timestamps : [];

   const updateTimeout = (interval: number) => {
      if (isPlaying) {
         setTimeout(() => {
            if (selectedWord <= timestamps.length) {
               setSelectedWord(selectedWord + 1);
            }
         }, interval);
      }
   };

   useEffect(() => {
      window.scrollTo({ top: 0, left:0, behavior: 'auto' });
   }, []);

   useEffect(() => {
      if (story.transcript && selectedWord > 0) {
         updateTimeout(timestamps[selectedWord] - timestamps[selectedWord - 1] - 25);
      }
   }, [selectedWord]);

   useEffect(() => {
      if (story.transcript && isPlaying) {
         updateTimeout(timestamps[selectedWord]- lastVOPosition- 100);
      }
   }, [isPlaying]);

   const updateVOPosition = (time: number) => {
      setLastVOPosition(time);
   };

   return (
      <Div className='container narrow-container pt-5'>
         <Div className='row pt-2'>
            <StoryCard
               story={story}
               isLatest={true}/>
         </Div>
         <Div className='row py-4 px-3'>
            {story.voiceoverUrl && (
               <VOPlayer
                  voiceover={{
                     url: story.voiceoverUrl,
                     title: `Studio VN21 - ${story.title}`,
                  }}
                  setIsPlaying={setIsPlaying}
                  updateVOPosition={updateVOPosition}
                  />
            )}
         </Div>
         <Div className='row'>
            <Div className='col-md-8 h5 px-3 mb-0'>
               {wordElements.map((wordElement) => {
                  return (
                     <>
                        <Div key={`word-${wordElement.index}`}
                             className='d-inline-block px-1' style={
                           {
                              borderBottom: isPlaying && selectedWord === wordElement.index ?
                                 '3px solid #ff5500' : '3px solid transparent'
                           }
                        } >{wordElement.word}
                        </Div>
                        {(wordElement.index === 49 || wordElement.index === 86) ? (
                           <p/>
                        ) : null}
                     </>
                  );
               })}
            </Div>
            <Div className='col-md-4' style={{ borderLeft: '2px solid' }}/>
         </Div>
      </Div>
   );
};
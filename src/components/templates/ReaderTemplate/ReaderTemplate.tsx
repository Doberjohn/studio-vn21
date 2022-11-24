import { IStory } from '../../../interfaces';
import { useStory } from '../../../hooks';
import { Div, Span } from '../../atoms';
import React, { useEffect, useState } from 'react';
import { StoryCard, VOPlayer } from '../../organisms';

interface ReaderTemplateProps {
   story: IStory;
}

interface IWordElement {
   word: string;
   index: number;
}

export const ReaderTemplate = ({ story }: ReaderTemplateProps) => {
   if (!story) return null;

   const { getStoryContentDetails } = useStory();
   const [selectedWord, setSelectedWord] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [lastVOPosition, setLastVOPosition] = useState(0);
   const { storyWords, storyBreakpoints, storyTimestamps } = getStoryContentDetails(story.storyId);

   const updateTimeout = (interval: number) => {
      if (isPlaying) {
         setTimeout(() => {
            if (selectedWord <= storyTimestamps.length) {
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
         updateTimeout(storyTimestamps[selectedWord] - storyTimestamps[selectedWord - 1] - 25);
      }
   }, [selectedWord]);

   useEffect(() => {
      if (story.transcript && isPlaying) {
         updateTimeout(storyTimestamps[selectedWord]- lastVOPosition- 100);
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
            <Div className='col-md-8 h5 p-3 pt-0'>
               {storyWords.map((wordElement: IWordElement) => {
                  return (
                     <Span key={`word-${wordElement.index}`}>
                        <Div className='d-inline-block px-1' style={
                           {
                              borderBottom: isPlaying && selectedWord === wordElement.index ?
                                 '3px solid #ff5500' : '3px solid transparent'
                           }
                        } >{wordElement.word}
                        </Div>
                        {(storyBreakpoints.includes(wordElement.index)) ? (
                           <p/>
                        ) : null}
                     </Span>
                  );
               })}
            </Div>
            <Div className='col-md-4' style={{ borderLeft: '2px solid' }}/>
         </Div>
      </Div>
   );
};
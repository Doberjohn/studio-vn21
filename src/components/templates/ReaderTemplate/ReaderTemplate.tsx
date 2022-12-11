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
   const [voPosition, setVOPosition] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [activeWordIndex, setActiveWordIndex] = useState(0);
   const [activeSentenceIndex, setActiveSentenceIndex] = useState(0);
   const { words, sentenceBreakpoints, paragraphBreakpoints, audioTimestamps } =
      getStoryContentDetails(story.storyId);

   useEffect(() => {
      window.scrollTo({ top: 0, left:0, behavior: 'auto' });
   }, []);

   useEffect(() => {
      if (isPlaying) {
         const activeWord = audioTimestamps.find((ts) => ts >= voPosition) || 0;
         const wordIndex = audioTimestamps.indexOf(activeWord) || 0;
         const activeSentence = sentenceBreakpoints.find((bp) => bp >= wordIndex) || 0;
         setActiveWordIndex(wordIndex ? wordIndex : 0);
         setActiveSentenceIndex(sentenceBreakpoints.indexOf(activeSentence));
      }
   }, [voPosition]);

   const test = (index: number):boolean => {
      if (isPlaying) {
         if (activeSentenceIndex === 0 && index <= sentenceBreakpoints[0]) return true;
         else if (index > sentenceBreakpoints[activeSentenceIndex - 1] &&
            index <= sentenceBreakpoints[activeSentenceIndex]) {
            return true;
         }
      }
      return false;
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
                  title={story.title}
                  voiceoverUrl={story.voiceoverUrl}
                  setIsPlaying={setIsPlaying}
                  setVOPosition={setVOPosition}
                  />
            )}
         </Div>
         <Div className='row'>
            <Div className='col-md-8 h5 p-3 pt-0'>
               {words.map((wordElement: IWordElement, index) => {
                  return (
                     <Span key={`word-${wordElement.index}`}>
                        <Div className='d-inline-block p-1' style={
                           isPlaying && activeWordIndex === index ? {
                              background: 'rgba(255,85,0,0.6)',
                              borderRadius: 3,
                           }: test(index) ? {
                              background: 'rgba(255,85,0,0.2)',
                           }: {}
                        } >{wordElement.word}
                        </Div>
                        {(paragraphBreakpoints.includes(wordElement.index)) ? (
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
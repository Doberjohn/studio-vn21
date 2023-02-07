import { IStory } from '../../../interfaces';
import { IWordElement } from '../../../interfaces';
import { useStory } from '../../../hooks';
import { Div, Span } from '../../atoms';
import React, { useEffect, useState } from 'react';
import { StoryCard, VOPlayer } from '../../organisms';

interface ReaderTemplateProps {
   story: IStory;
}

export const StoryTemplateDesktop = ({ story }: ReaderTemplateProps) => {
   if (!story) return null;

   const isProdEnv = process.env.REACT_APP_VERCEL_ENV === 'production';
   const { getStoryContentDetails } = useStory();
   const [voPosition, setVOPosition] = useState(0);
   const [isPlaying, setIsPlaying] = useState(false);
   const [activeWordIndex, setActiveWordIndex] = useState(0);
   const [activeSentenceIndex, setActiveSentenceIndex] = useState(0);
   const { words, sentenceBreakpoints, paragraphBreakpoints, audioTimestamps } =
      getStoryContentDetails(story.storyId);

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
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

   const test = (index: number): boolean => {
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
      <Div className='container ps-0'>
         <Div className='d-flex align-items-center justify-content-between mt-5 mb-3'>
            <Div className='h1'>{story.title}</Div>
            <Div className='h5 mb-0 fst-italic'>
               <Span>Written by </Span>
               {story.author === 'Katerina Markopoulou' ? (
                  <a href='https://medium.com/@katesagimark' target='_blank'>{story.author}</a>
               ) : story.author === 'Elena Mit' ? (
                  <a href='https://medium.com/@elena-mit' target='_blank'>{story.author}</a>
               ) : <Span>{story.author}</Span>}
            </Div>
         </Div>
         <Div className='row py-2'>
            <Div className='col-8 h5 pt-0'>
               {words.map((wordElement: IWordElement, index: number) => {
                  return (
                     <Span key={`word-${wordElement.index}`}>
                        <Div className='d-inline-block p-1' style={
                           isPlaying && activeWordIndex === index ? {
                              background: 'rgba(255,85,0,0.6)',
                              borderRadius: 3,
                           } : test(index) ? {
                              background: 'rgba(255,85,0,0.2)',
                           } : {}
                        }>{wordElement.text}
                        </Div>
                        {(paragraphBreakpoints.includes(wordElement.index)) ? (
                           <p/>
                        ) : null}
                     </Span>
                  );
               })}
            </Div>
            <Div className='col-4' style={{ borderLeft: '2px solid' }}>
               <Div className='row ps-4'>
                  <StoryCard
                     story={story}
                     isLatest={false}/>
               </Div>
            </Div>
         </Div>
         {!isProdEnv && (
            <Div className='row'>
               {story.voiceoverUrl && story.voiceoverPCM && (
                  <VOPlayer
                     voiceoverUrl={story.voiceoverUrl}
                     voiceoverPCM={story.voiceoverPCM}
                     setIsPlaying={setIsPlaying}
                     setVOPosition={setVOPosition}
                  />
               )}
            </Div>
         )}
      </Div>
   );
};
import { IStory } from '../../../interfaces';
import React from 'react';
import { AudioPlayer, StoryCard } from '../../organisms';
import { Div, Paragraph } from '../../atoms';

interface ReaderTemplateProps {
   story: IStory;
}

export const ReaderTemplate = ({ story }: ReaderTemplateProps) => {
   if (!story) return null;
   const contentParts = story.content.split(/[\n]/g).filter((entry) => entry !== '');
   window.scrollTo({ top: 0, left:0, behavior: 'auto' });

   return (
      <Div className='container narrow-container pt-5'>
         <Div className='row pt-2'>
            <StoryCard
               story={story}
               isLatest={true}/>
         </Div>
         <Div className='row py-4'>
            {story.voiceoverUrl && (
               <AudioPlayer trackList={[
                  {
                     url: story.voiceoverUrl,
                     title: `Studio VN21 - ${story.title}`,
                     tags: ['house'],
                  },
               ]}/>
            )}
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
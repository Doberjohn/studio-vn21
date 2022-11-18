import { IStory } from '../../../interfaces';
import React from 'react';
import { StoryCard } from '../../organisms';
import { Div, Paragraph } from '../../atoms';

interface ReaderTemplateProps {
   story: IStory;
}

export const ReaderTemplate = ({ story }: ReaderTemplateProps) => {
   if (!story) return null;
   const contentParts = story.content.split(/[\n]/g).filter((entry) => entry !== '');

   console.log(story);
   window.scrollTo({ top: 0, left:0, behavior: 'auto' });
   return (
      <Div className='container narrow-container pt-5'>
         <Div className='row pt-2 pb-4'>
            <StoryCard
               story={story}
               isLatest={true}/>
         </Div>
         <Div className='row'>
            <Div className='col-md-8 h5 px-3 mb-0'>
               {contentParts.map((part) => {
                  return (
                     <Paragraph>{part}</Paragraph>
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
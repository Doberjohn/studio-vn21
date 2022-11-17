import { IStory } from '../../../interfaces';
import React from 'react';
import { StoryCard } from '../../organisms';
import { Div, Paragraph } from '../../atoms';

interface ReaderTemplateProps {
   story: IStory;
}

export const ReaderTemplate = ({ story }: ReaderTemplateProps) => {
   if (!story) return null;

   return (
      <Div className='container narrow-container py-5'>
         <Div className='row pt-3 pb-4'>
            <StoryCard
               story={story}
               isLatest={true}/>
         </Div>
         <Div className='row'>
            <Div className='col-md-8 px-4' style={{ fontSize: 18 }}>
               <Paragraph
                  className='text-justify'>{'They all look so happy. And why wouldn’t they be? It’s the happiest day of their life and one more “worst day” of mine. After all these years, I have gotten used to asking them to smile at me. Though, I haven’t been able to smile myself behind the camera.'}</Paragraph>
               <Paragraph
                  className='text-justify'>{'I am trapped in a job I used to love, and now it makes me sick. Photography was my life and passion, but I traded my imagination for a salary. Thus, weddings had my creativity run dry.'}</Paragraph>
               <Paragraph
                  className='text-justify'>{'I fear the day my love for my art will cease to exist.'}</Paragraph>
            </Div>
         </Div>
      </Div>
   );
};
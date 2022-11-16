import React from "react";
import {Div, Paragraph} from "../../atoms";
import {StoryCard} from "../../organisms";

interface ReaderTemplateProps {
   storyId: string;
}

export const ReaderTemplate = ({storyId}: ReaderTemplateProps) => {
   console.log(storyId)
   return (
      <Div className="container py-5">
         <Div className="row pt-5 pb-4">
            <StoryCard
               story={
                  {
                     title: 'The spark of creativity',
                     subtitle: 'Let imagination be your guide',
                     imageUrl: 'https://miro.medium.com/max/720/1*8HBbDc7QRDQmkekKXf9_bg.png',
                     externalReadLink: '',
                     publishDate: new Date()
                  }
               }
               isLatest={true}
               className="px-0"/>
         </Div>
         <Div className="row">
            <Div className="col-lg-12" style={{fontSize: 18}}>
               <Paragraph className="text-justify">{`They all look so happy. And why wouldn’t they be? It’s the happiest day of their life and one more “worst day” of mine. After all these years, I have gotten used to asking them to smile at me. Though, I haven’t been able to smile myself behind the camera.`}</Paragraph>
               <Paragraph className="text-justify">{`I am trapped in a job I used to love, and now it makes me sick. Photography was my life and passion, but I traded my imagination for a salary. Thus, weddings had my creativity run dry.`}</Paragraph>
               <Paragraph className="text-justify">{`I fear the day my love for my art will cease to exist.`}</Paragraph>
            </Div>
         </Div>
      </Div>
   )
}
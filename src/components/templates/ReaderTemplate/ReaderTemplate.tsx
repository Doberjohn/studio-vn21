import React from "react";
import {Div, Paragraph} from "../../atoms";

interface ReaderTemplateProps {
   storyId: string;
}

export const ReaderTemplate = ({storyId}: ReaderTemplateProps) => {
   console.log(storyId)
   return (
      <Div className="container ps-0">
         <Div className="row py-5">
            <Div className="col-lg-12 py-5" style={{fontSize: '18px'}}>
               <Paragraph>{`They all look so happy. And why wouldn’t they be? It’s the happiest day of their life and one more “worst day” of mine. After all these years, I have gotten used to asking them to smile at me. Though, I haven’t been able to smile myself behind the camera.`}</Paragraph>
               <Paragraph>{`I am trapped in a job I used to love, and now it makes me sick. Photography was my life and passion, but I traded my imagination for a salary. Thus, weddings had my creativity run dry.`}</Paragraph>
               <Paragraph>{`I fear the day my love for my art will cease to exist.`}</Paragraph>
            </Div>
         </Div>
      </Div>
   )
}
import React from "react";
import {Div, Span} from "../../atoms";
import {StoryCard} from "../index";
import {IStory} from "../../../interfaces";

interface PreviousStoriesProps {
   stories: IStory[]
}

export const PreviousStories = ({stories}: PreviousStoriesProps) => {
   return (
      <Div>
         <Span className="h2">Previous stories</Span>
         <Div className="row">
            {stories.map((story, index) => {
               return (
                  <Div key={`previous-story-${index}`} className="col-md-6">
                     <StoryCard
                        story={story}
                        isLatest={false}
                        className="mt-4"/>
                  </Div>
               )
            })}
         </Div>
      </Div>
   )
}
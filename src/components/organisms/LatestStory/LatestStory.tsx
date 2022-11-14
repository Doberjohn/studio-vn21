import React from "react";
import {Div, Span} from "../../atoms";
import {IStory} from "../../../interfaces";
import {StoryCard} from "../index";

export const LatestStory = (story: IStory) => {
   return (
      <Div>
         <Span className="h2">Latest story</Span>
         <StoryCard
            story={story}
            isLatest={true}
            className="mt-4"/>
      </Div>
   )
}
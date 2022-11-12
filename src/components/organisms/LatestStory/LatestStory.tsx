import React from "react";
import {Div, Span} from "../../atoms";
import {StoryCard} from "../../molecules";
import {IStory} from "../../../interfaces";

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
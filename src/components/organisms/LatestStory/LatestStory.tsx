import React from "react";
import {Div, Span} from "../../atoms";
import {StoryCard} from "../../molecules";
import {IStoryCard} from "../../../shared/interfaces";

export const LatestStory = ({title, subtitle, imageUrl, actionUrl}: IStoryCard) => {
   return (
      <Div>
         <Span className="h2">Latest story</Span>
         <StoryCard
            className="mt-4"
            title={title}
            subtitle={subtitle}
            imageUrl={imageUrl}
            actionUrl={actionUrl}
            type="latest"/>
      </Div>
   )
}
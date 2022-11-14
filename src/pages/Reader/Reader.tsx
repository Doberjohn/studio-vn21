import React from "react";
import {ReaderTemplate} from "../../components/templates";
import {useParams} from "react-router-dom";

export const Reader = () => {
   let params = useParams();
   const storyId = params.storyId;

   if (!storyId) return null;
   return <ReaderTemplate storyId={storyId}/>
}

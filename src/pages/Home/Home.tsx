import React, {useEffect} from "react";
import {HomeTemplate} from "../../components/templates";
import {useStory} from "../../hooks/useStory";


export const Home = () => {
   const { stories, readStories } = useStory();

   useEffect(() => {
      readStories();
   }, []);

   if (stories.length === 0) return null;
   return <HomeTemplate latestStory={stories[0]} stories={stories.slice(1, 7)}/>
}

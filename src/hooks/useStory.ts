import {useState} from "react";
import {IStory} from "../interfaces";
import Parse from 'parse';

export const useStory = () => {
   const [stories, setStories] = useState<IStory[]>([]);

   const readStories = async function() {
      try {
         const query = new Parse.Query('Story');
         query.equalTo('isReadable', true);
         query.descending('publishDate');
         const backendStories = await query.find();
         const mappedStories = backendStories.map((backendProduct) => {
            return {
               title: backendProduct.get('title'),
               subtitle: backendProduct.get('subtitle'),
               imageUrl: backendProduct.get('coverImage')._url,
               externalReadLink: backendProduct.get('externalLink'),
               publishDate: backendProduct.get('publishDate'),
            }
         });

         console.log(mappedStories)
         setStories(mappedStories);
      } catch (e) {
         console.error(e);
      }
   }

   return { stories, readStories }
}
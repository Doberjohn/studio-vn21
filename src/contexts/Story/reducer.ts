import { IBrowseTemplate, IStory } from '../../interfaces';

export interface Action {
   type: string,
   payload: any;
}

interface State {
   homePageContent: IBrowseTemplate;
   selectedStory: IStory;
}

export const reducer = (state: State, action: Action): State => {
   switch (action.type) {
      case 'SET_HOME_CONTENT':
         return {
            ...state,
            homePageContent: action.payload
         };
      case 'SET_SELECTED_STORY':
         return {
            ...state,
            selectedStory: action.payload
         };
      case 'CLEAR_SELECTED_STORY':
         return {
            ...state,
            selectedStory: {
               author: '',
               content: [],
               coverUrl: '',
               publishDate: new Date(),
               storyId: '',
               title: ''
            }
         };
      default:
         throw new Error();
   }
};

export const initialState: State = {
   homePageContent: {
      latestStory: {
         coverUrl: '',
         storyId: '',
         title: ''
      },
      categories: []
   },
   selectedStory: {
      author: '',
      content: [],
      coverUrl: '',
      publishDate: new Date(),
      storyId: '',
      title: ''
   }
};
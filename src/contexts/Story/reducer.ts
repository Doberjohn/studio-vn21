import { IBrowseTemplate } from '../../interfaces';

export interface Action {
   type: string,
   payload: IBrowseTemplate;
}

interface State {
   homePageContent: IBrowseTemplate;
}

export const reducer = (state: State, action: Action): State => {
   switch (action.type) {
      case 'SET_HOME_CONTENT':
         return {
            ...state,
            homePageContent: action.payload
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
   }
};
import { IStory } from '../../interfaces';

export const reducer = (state: {stories: IStory[]}, action: {type: string, payload: any}) => {
   switch (action.type) {
      case 'SET_STORIES':
         return {
            ...state,
            stories: action.payload
         };
      default:
         return state;
   }
};

export const initialState: {stories: IStory[]} = {
   stories: []
};
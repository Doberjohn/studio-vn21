import { IStory } from '../../interfaces';

export interface Action {type: string, payload: IStory[]}
interface State {stories: IStory[]}

export const reducer = (state: State, action: Action) => {
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
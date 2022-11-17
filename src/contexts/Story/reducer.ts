export const reducer = (state: any, action: any) => {
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

export const initialState = {
   stories: []
};
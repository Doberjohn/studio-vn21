import { initialState, reducer } from './reducer';
import React, { createContext, Dispatch, ReactNode, useReducer } from 'react';

export const StoryContext = createContext({
    state: initialState,
    dispatch: (() => null) as Dispatch<any>,
});

export const StoryProvider = ({ children }: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <StoryContext.Provider value={{ state, dispatch }}>
            { children }
        </StoryContext.Provider>
    );
};
import { createContext, Dispatch, useContext } from 'react';
import { State, emptyState } from '../models/state';
import { Actions } from '../models/actions';

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'addEntry':
      return { ...state, entries: [...state.entries, action.entry] };
    default:
      return state;
  }
};

export const createReducer = () => (state: State, action: Actions) => reducer(state, action);

let contextSingleton: React.Context<[State, Dispatch<Actions>]>;
export const getTimelineContext = () => {
  if (!contextSingleton) {
    contextSingleton = createContext<[State, Dispatch<Actions>]>([
      emptyState,
      () => {
        throw new Error("Collapsible timeline context isn't initialized.");
      },
    ]);
  }
  return contextSingleton;
};
export const useCollapsibleTimeline = () => useContext(getTimelineContext());

import { PropsWithChildren, useReducer } from 'react';
import { createReducer, getTimelineContext } from '../features/context';
import { emptyState } from '../models/state';

type Props = PropsWithChildren<{}>;

export function CollapsibleTimeline({ children }: Props) {
  const CollapsibleTimelineContext = getTimelineContext();
  return (
    <CollapsibleTimelineContext.Provider value={useReducer(createReducer(), emptyState)}>
      <div>{children}</div>
    </CollapsibleTimelineContext.Provider>
  );
}

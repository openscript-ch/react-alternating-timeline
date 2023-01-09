import { Entry } from './entry';

export type State = {
  entries: Entry[];
};

export const emptyState: State = {
  entries: [],
};

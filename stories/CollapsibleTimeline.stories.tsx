import { CollapsibleTimeline, TimelineEntry } from '../src';

export default {
  title: 'Collapsible Timeline',
  component: CollapsibleTimeline,
  parameters: {
    docs: {
      page: null,
    },
  },
};

export function Basic() {
  return (
    <CollapsibleTimeline>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24 * 14}>Two weeks ago</TimelineEntry>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24 * 7}>A week ago</TimelineEntry>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24 * 2}>Two days ago</TimelineEntry>
      <TimelineEntry timestamp={new Date().getTime() - 1000 * 60 * 60 * 24}>One day ago</TimelineEntry>
    </CollapsibleTimeline>
  );
}

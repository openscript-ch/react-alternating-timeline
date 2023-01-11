import { TimelineItem, TimelineItemProps } from './TimelineItem';

export type TimelineProps = {
  items: TimelineItemProps[];
};

export function Timeline({ items }: TimelineProps) {
  return items.map((item) => <TimelineItem key={item.date.toISOString()} {...item} />);
}

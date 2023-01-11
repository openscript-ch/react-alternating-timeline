import { TimelineItem, TimelineItemProps } from './TimelineItem';
import './Timeline.css';

export type TimelineProps = {
  items: TimelineItemProps[];
};

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="timeline">
      <div className="timeline__line" />
      {items.map((item) => (
        <TimelineItem key={item.date.toISOString()} {...item} />
      ))}
    </div>
  );
}

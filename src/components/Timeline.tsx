import './Timeline.css';
import { useRef } from 'react';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

export type TimelineProps = {
  items: TimelineItemProps[];
};

export function Timeline({ items }: TimelineProps) {
  const itemsRef = useRef<Map<Date, HTMLDivElement>>();

  function getRefMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  return (
    <div className="timeline">
      <div className="timeline__line" />
      {items.map((item) => (
        <div
          ref={(node) => {
            const map = getRefMap();
            if (node) {
              map.set(item.date, node);
            } else {
              map.delete(item.date);
            }
          }}
        >
          <TimelineItem key={item.date.toISOString()} {...item} />
        </div>
      ))}
    </div>
  );
}

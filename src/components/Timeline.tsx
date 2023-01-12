import './Timeline.css';
import { useEffect, useRef } from 'react';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

export type TimelineProps = {
  items: TimelineItemProps[];
};

export function Timeline({ items }: TimelineProps) {
  const itemsRef = useRef<Map<Date, HTMLElement>>();

  function getRefMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  useEffect(() => {
    const elements = Array.from(getRefMap().values());
    const heights = elements.map((item) => item.offsetHeight);

    elements.forEach((item, index) => {
      const element = item;
      const topOffset = heights.slice(0, index).reduce((prev, curr) => prev + curr, 0);
      element.style.top = `${topOffset}px`;
    });
  }, [itemsRef]);

  return (
    <div className="timeline">
      <div className="timeline__line" />
      {items.map((item) => (
        <TimelineItem
          {...item}
          ref={(node) => {
            const map = getRefMap();
            if (node) {
              map.set(item.date, node);
            } else {
              map.delete(item.date);
            }
          }}
          key={item.date.toISOString()}
        />
      ))}
    </div>
  );
}

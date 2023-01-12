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

    let leftHeight = 0;
    let rightHeight = 0;

    elements.forEach((item) => {
      const element = item;
      if (leftHeight > rightHeight) {
        element.style.top = `${rightHeight}px`;
        element.style.right = '0';
        rightHeight += element.offsetHeight;
      } else {
        element.style.top = `${leftHeight}px`;
        leftHeight += element.offsetHeight;
        element.style.left = '0';
      }
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

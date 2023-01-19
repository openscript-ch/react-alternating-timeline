import './Timeline.css';
import { useEffect, useRef } from 'react';
import { TimelineItem, TimelineItemProps } from './TimelineItem';

type OffsetConfig = number | { left?: number; right?: number };

const resolveOffsets = (offset: OffsetConfig) =>
  typeof offset === 'number' ? { right: offset, left: 0 } : { right: offset.right ?? 0, left: offset.left ?? 0 };

export type TimelineProps = {
  items: TimelineItemProps[];
  gap?: number;
  offset?: OffsetConfig;
};

const defaultTimelineConfig: Partial<TimelineProps> = {
  gap: 50,
  offset: 50,
};

export function Timeline(props: TimelineProps) {
  const { items, gap, offset } = { ...defaultTimelineConfig, ...props };

  const timelineRef = useRef<HTMLDivElement>(null);
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

    const { left, right } = resolveOffsets(offset ?? 0);
    let leftHeight = left;
    let rightHeight = right;

    elements.forEach((item) => {
      const element = item;
      if (leftHeight > rightHeight) {
        element.style.top = `${rightHeight}px`;
        element.classList.add('timeline-item--right');
        rightHeight += element.offsetHeight + (gap ?? 0);
      } else {
        element.style.top = `${leftHeight}px`;
        leftHeight += element.offsetHeight + (gap ?? 0);
        element.classList.add('timeline-item--left');
      }
    });

    const timelineElement = timelineRef.current;
    if (timelineElement) {
      timelineElement.style.height = `${Math.max(leftHeight, rightHeight)}px`;
    }
  }, [itemsRef]);

  return (
    <div className="timeline" ref={timelineRef}>
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

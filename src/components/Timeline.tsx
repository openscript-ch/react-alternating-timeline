import './Timeline.css';
import { useEffect, useRef } from 'react';
import { PropsWithKey, TimelineItem, TimelineItemProps } from './TimelineItem';

type OffsetConfig = number | { left?: number; right?: number };

const resolveOffsets = (offset: OffsetConfig) =>
  typeof offset === 'number' ? { right: offset, left: 0 } : { right: offset.right ?? 0, left: offset.left ?? 0 };

const MIN_MARKER_OFFSET = 50;

const getMarkerCompensationOffset = (left: number, right: number) => {
  const heightDifference = Math.abs(left - right);
  if (heightDifference < MIN_MARKER_OFFSET) {
    return MIN_MARKER_OFFSET - heightDifference;
  }
  return 0;
};

export type TimelineProps = {
  items: PropsWithKey<TimelineItemProps>[];
  gap?: number;
  offset?: OffsetConfig;
  className?: string;
};

const defaultTimelineConfig: Partial<TimelineProps> = {
  gap: 50,
  offset: 50,
};

export function Timeline(props: TimelineProps) {
  const { items, gap, offset, className } = { ...defaultTimelineConfig, ...props };

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
        leftHeight += getMarkerCompensationOffset(leftHeight, rightHeight);

        element.style.top = `${rightHeight}px`;
        element.classList.add('timeline-item--right');
        rightHeight += element.offsetHeight + (gap ?? 0);
      } else {
        rightHeight += getMarkerCompensationOffset(leftHeight, rightHeight);

        element.style.top = `${leftHeight}px`;
        element.classList.add('timeline-item--left');
        leftHeight += element.offsetHeight + (gap ?? 0);
      }
    });

    const timelineElement = timelineRef.current;
    if (timelineElement) {
      timelineElement.style.height = `${Math.max(leftHeight, rightHeight)}px`;
    }
  }, [itemsRef]);

  return (
    <div className={['timeline', className].join(' ')} ref={timelineRef}>
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
        />
      ))}
    </div>
  );
}

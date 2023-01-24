import './Timeline.css';
import { Key, useEffect, useRef } from 'react';
import { PropsWithKey, TimelineItem, TimelineItemProps } from './TimelineItem';
import { OffsetConfig, resolveOffsets } from '../models/offset';

export type TimelineProps = {
  items: PropsWithKey<TimelineItemProps>[];
  gap?: number;
  offset?: OffsetConfig;
  minMarkerGap?: number;
  dateFormat?: string;
  dateLocale?: Locale;
  className?: string;
};

const defaultTimelineConfig: Partial<TimelineProps> = {
  gap: 50,
  offset: 50,
  minMarkerGap: 50,
  dateFormat: 'P',
};

export function Timeline(props: TimelineProps) {
  const { items, gap, offset, minMarkerGap, className, dateFormat, dateLocale } = { ...defaultTimelineConfig, ...props };

  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<Key, HTMLElement>>();

  function getRefMap() {
    if (!itemsRef.current) {
      // Initialize the Map on first usage.
      itemsRef.current = new Map();
    }
    return itemsRef.current;
  }

  function getMinMarkerGapCompensation(left: number, right: number) {
    if (minMarkerGap) {
      const heightDifference = Math.abs(left - right);
      if (heightDifference < minMarkerGap) {
        return minMarkerGap - heightDifference;
      }
    }
    return 0;
  }

  function positionTimelineItems() {
    const elements = Array.from(getRefMap().values());

    const { left, right } = resolveOffsets(offset ?? 0);
    let leftHeight = left;
    let rightHeight = right;

    elements.forEach((item) => {
      const element = item;

      if (leftHeight > rightHeight) {
        leftHeight += getMinMarkerGapCompensation(leftHeight, rightHeight);

        element.style.top = `${rightHeight}px`;
        element.classList.add('timeline-item--right');
        element.classList.remove('timeline-item--left');
        rightHeight += element.offsetHeight + (gap ?? 0);
      } else {
        rightHeight += getMinMarkerGapCompensation(leftHeight, rightHeight);

        element.style.top = `${leftHeight}px`;
        element.classList.add('timeline-item--left');
        element.classList.remove('timeline-item--right');
        leftHeight += element.offsetHeight + (gap ?? 0);
      }
    });

    const timelineElement = timelineRef.current;
    if (timelineElement) {
      timelineElement.style.height = `${Math.max(leftHeight, rightHeight)}px`;
    }
  }

  useEffect(() => {
    window.addEventListener('resize', positionTimelineItems);
    return () => window.removeEventListener('resize', positionTimelineItems);
  }, []);
  useEffect(positionTimelineItems, [itemsRef]);

  return (
    <div className={['timeline', className].join(' ')} ref={timelineRef}>
      <div className="timeline__line" />
      {items.map((item) => (
        <TimelineItem
          dateFormat={dateFormat}
          dateLocale={dateLocale}
          {...item}
          ref={(node) => {
            const map = getRefMap();
            if (node) {
              map.set(item.key, node);
            } else {
              map.delete(item.key);
            }
          }}
        />
      ))}
    </div>
  );
}

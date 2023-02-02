import './Timeline.css';
import { Key, ReactElement, useEffect, useRef } from 'react';
import { PropsWithKey, TimelineItem, TimelineItemProps, TimelineItemRefs } from './TimelineItem';
import { OffsetConfig, resolveOffsets } from '../models/offset';
import { Positioning } from '../models/positioning';
import { convertToCssVariable, StyleConfig } from '../models/style';

export type TimelineProps = {
  items: PropsWithKey<TimelineItemProps>[];
  positioning: Positioning;
  gap?: number;
  offset?: OffsetConfig;
  minMarkerGap?: number;
  defaultPointerOffset?: number;
  dateFormat?: string;
  dateLocale?: Locale;
  customMarker?: ReactElement;
  customPointer?: ReactElement;
  styleConfig?: StyleConfig;
  className?: string;
};

const defaultTimelineConfig: Partial<TimelineProps> = {
  positioning: 'alternating',
  gap: 50,
  offset: 50,
  minMarkerGap: 50,
  defaultPointerOffset: 40,
  dateFormat: 'P',
};

export function Timeline(props: TimelineProps) {
  const {
    items,
    positioning,
    gap,
    offset,
    minMarkerGap,
    defaultPointerOffset,
    className,
    dateFormat,
    dateLocale,
    customMarker,
    customPointer,
    styleConfig,
  } = {
    ...defaultTimelineConfig,
    ...props,
  };

  const timelineRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<Key, TimelineItemRefs>>();

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

    const { left, right } = resolveOffsets(offset ?? 0, positioning);
    let leftHeight = left;
    let rightHeight = right;

    let nextMarkerOffset = defaultPointerOffset ?? 0;

    elements.forEach((refs) => {
      const { item, pointer, marker } = refs;
      if (!item || !pointer || !marker) return;

      // offsets marker + pointer if it would get in the way of the last marker
      pointer.style.top = `${nextMarkerOffset}px`;
      marker.style.marginTop = `${nextMarkerOffset}px`;

      const markerOffsetCompensation = getMinMarkerGapCompensation(leftHeight, rightHeight);
      nextMarkerOffset = markerOffsetCompensation + (defaultPointerOffset ?? 0);

      // defines whether an item should be positioned left or right of the timeline
      if ((positioning !== 'right' && leftHeight > rightHeight) || positioning === 'left') {
        item.style.top = `${rightHeight}px`;
        item.classList.add('timeline-item--right');
        item.classList.remove('timeline-item--left');
        rightHeight += item.offsetHeight + (gap ?? 0);
      } else {
        item.style.top = `${leftHeight}px`;
        item.classList.add('timeline-item--left');
        item.classList.remove('timeline-item--right');
        leftHeight += item.offsetHeight + (gap ?? 0);
      }
    });

    // update height of container element to match absolute positioned timeline
    const timelineElement = timelineRef.current;
    if (timelineElement) {
      timelineElement.style.height = `${Math.max(leftHeight, rightHeight)}px`;
    }
  }

  useEffect(() => {
    if (!styleConfig) return;
    Object.entries(convertToCssVariable(styleConfig)).forEach((prop) => timelineRef.current?.style.setProperty(...prop));
  }, [styleConfig]);

  useEffect(() => {
    window.addEventListener('resize', positionTimelineItems);
    return () => window.removeEventListener('resize', positionTimelineItems);
  }, []);
  useEffect(positionTimelineItems, [itemsRef]);

  return (
    <div className={['timeline', `timeline--${positioning}`, className].join(' ')} ref={timelineRef}>
      <div className="timeline__line" />
      {items.map((item) => (
        <TimelineItem
          dateFormat={dateFormat}
          dateLocale={dateLocale}
          customMarker={customMarker}
          customPointer={customPointer}
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

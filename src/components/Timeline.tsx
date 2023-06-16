import './Timeline.css';
import { Key, ReactElement, useEffect, useRef } from 'react';
import { TimelineItem, TimelineItemRefs, TimelineItemsProps } from './TimelineItem';
import { Positioning } from '../models/positioning';
import { convertToCssVariable, StyleConfig } from '../models/style';

export type TimelineProps = {
  items: TimelineItemsProps;
  positioning?: Positioning;
  minMarkerGap?: number;
  formatDate?: (date: Date) => string;
  customMarker?: ReactElement;
  customPointer?: ReactElement;
  styleConfig?: StyleConfig;
  className?: string;
};

export const defaultTimelineConfig: Partial<TimelineProps> = {
  positioning: 'alternating',
  minMarkerGap: 50,
};

export function Timeline(props: TimelineProps) {
  const { items, positioning, minMarkerGap, className, customMarker, customPointer, styleConfig, formatDate } = {
    ...defaultTimelineConfig,
    ...props,
  };

  const timelineRef = useRef<HTMLDivElement>(null);
  const leftContainer = useRef<HTMLDivElement>(null);
  const rightContainer = useRef<HTMLDivElement>(null);
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

    if (!leftContainer.current || !rightContainer.current) return;

    let leftHeight = leftContainer.current.offsetTop;
    let rightHeight = rightContainer.current.offsetTop;

    const [firstElement] = elements;

    const defaultMarkerOffset = firstElement.marker?.offsetTop ?? 0;
    let nextMarkerOffset = defaultMarkerOffset;

    if (!firstElement.item) return;

    const { marginBottom } = getComputedStyle(firstElement.item);
    const gapHeight = parseFloat(marginBottom);

    elements.forEach((refs) => {
      const { item, pointer, marker } = refs;
      if (!item || !pointer || !marker) return;

      // offsets marker + pointer if it would get in the way of the last marker
      pointer.style.top = `${nextMarkerOffset}px`;
      marker.style.marginTop = `${nextMarkerOffset}px`;

      const markerOffsetCompensation = getMinMarkerGapCompensation(leftHeight, rightHeight);
      nextMarkerOffset = markerOffsetCompensation + defaultMarkerOffset;

      // defines whether an item should be appended on the left or right side of the timeline
      if ((positioning !== 'right' && leftHeight > rightHeight) || positioning === 'left') {
        rightContainer.current?.appendChild(item);
        rightHeight += item.offsetHeight + gapHeight;
      } else {
        leftContainer.current?.appendChild(item);
        leftHeight += item.offsetHeight + gapHeight;
      }
    });
  }

  useEffect(() => {
    if (!styleConfig) return;
    Object.entries(convertToCssVariable(styleConfig)).forEach((prop) => timelineRef.current?.style.setProperty(...prop));
  }, [styleConfig]);

  useEffect(() => {
    const resizeObserver = new ResizeObserver(positionTimelineItems);

    if (leftContainer.current) {
      resizeObserver.observe(leftContainer.current);
    }
    if (rightContainer.current) {
      resizeObserver.observe(rightContainer.current);
    }
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className={['timeline', `timeline--${positioning}`, className].join(' ')} ref={timelineRef}>
      <div ref={leftContainer} className="timeline__items-container timeline__items-container--left">
        {/* First all items are rendered in the left column. They will be assigned to the corresponding column later */}
        {items.map((item) => (
          <TimelineItem
            customMarker={customMarker}
            customPointer={customPointer}
            formatDate={formatDate}
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

      <div className="timeline__line" />

      <div ref={rightContainer} className="timeline__items-container timeline__items-container--right" />
    </div>
  );
}

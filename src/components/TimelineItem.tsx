import { forwardRef, Key, PropsWithChildren, ReactElement, useRef, useImperativeHandle } from 'react';

type PropsWithKey<T> = T & {
  key: Key;
};

export type TimelineItemRefs = { pointer: HTMLDivElement | null; item: HTMLDivElement | null; marker: HTMLDivElement | null };

export type TimelineItemsProps = PropsWithKey<TimelineItemProps>[];

export type TimelineItemProps = PropsWithChildren<{
  className?: string;
  title?: string;
  date: Date | string;
  formatDate?: (date: Date) => string;
  customMarker?: ReactElement;
  customPointer?: ReactElement;
}>;

export const TimelineItem = forwardRef<TimelineItemRefs, TimelineItemProps>(
  ({ className, title, date, formatDate, children, customMarker, customPointer }, ref) => {
    const itemRef = useRef<HTMLDivElement>(null);
    const pointerRef = useRef<HTMLDivElement>(null);
    const markerRef = useRef<HTMLDivElement>(null);

    useImperativeHandle(ref, () => ({
      item: itemRef.current,
      pointer: pointerRef.current,
      marker: markerRef.current,
    }));

    return (
      <div ref={itemRef} className={['timeline-item', className].join(' ')}>
        <div ref={markerRef} className={['timeline-item__marker', customMarker && 'timeline-item__marker--custom'].join(' ')}>
          {customMarker}
        </div>
        <div className="timeline-card">
          <div ref={pointerRef} className={['timeline-card__pointer', customPointer && 'timeline-card__pointer--custom'].join(' ')}>
            {customPointer}
          </div>
          <p className="timeline-card__date">{date instanceof Date ? formatDate?.(date) ?? date.toLocaleDateString() : date}</p>
          {title && <p className="timeline-card__title">{title}</p>}
          {children}
        </div>
      </div>
    );
  },
);

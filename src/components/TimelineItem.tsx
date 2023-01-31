import { forwardRef, Key, PropsWithChildren, ReactElement } from 'react';
import { format } from 'date-fns';

export type PropsWithKey<T> = T & {
  key: Key;
};

export type TimelineItemProps = PropsWithChildren<{
  className?: string;
  date: Date | string;
  dateFormat?: string;
  dateLocale?: Locale;
  title: string;
  customMarker?: ReactElement;
  customPointer?: ReactElement;
}>;

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, title, date, children, dateFormat, dateLocale, customMarker, customPointer }, ref) => {
    return (
      <div ref={ref} className={['timeline-item', className].join(' ')}>
        <div className={['timeline-item__marker', customMarker && 'timeline-item__marker--custom'].join(' ')}>{customMarker}</div>
        <div className="timeline-card">
          <div className={['timeline-card__pointer', customPointer && 'timeline-card__pointer--custom'].join(' ')}>{customPointer}</div>
          <p className="timeline-card__date">{date instanceof Date ? format(date, dateFormat ?? 'P', { locale: dateLocale }) : date}</p>
          <p className="timeline-card__title">{title}</p>
          {children}
        </div>
      </div>
    );
  },
);

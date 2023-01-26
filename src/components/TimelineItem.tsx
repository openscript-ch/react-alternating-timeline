import { forwardRef, Key, PropsWithChildren } from 'react';
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
}>;

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(
  ({ className, title, date, children, dateFormat, dateLocale }, ref) => {
    return (
      <div ref={ref} className={['timeline-item', className].join(' ')}>
        <div className="timeline-marker">
          <div className="timeline-marker__pointer" />
          <div className="timeline-marker__mark" />
        </div>
        <div className="timeline-card">
          <p className="timeline-card__date">{date instanceof Date ? format(date, dateFormat ?? 'P', { locale: dateLocale }) : date}</p>
          <p className="timeline-card__title">{title}</p>
          {children}
        </div>
      </div>
    );
  },
);

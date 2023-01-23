import { forwardRef, Key, PropsWithChildren } from 'react';

export type PropsWithKey<T> = T & {
  key: Key;
};

export type TimelineItemProps = PropsWithChildren<{
  className?: string;
  date: Date;
  title: string;
}>;

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(({ className, title, date, children }, ref) => {
  return (
    <div ref={ref} className={['timeline-item', className].join(' ')}>
      <div className="timeline-item__marker" />
      <div className="timeline-card">
        <p className="timeline-card__date">{date.toISOString()}</p>
        <p>{title}</p>
        {children}
      </div>
    </div>
  );
});

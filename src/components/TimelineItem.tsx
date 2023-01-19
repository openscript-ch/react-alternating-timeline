import { forwardRef, PropsWithChildren } from 'react';

export type TimelineItemProps = PropsWithChildren<{
  className?: string;
  date: Date;
  title: string;
}>;

export const TimelineItem = forwardRef<HTMLDivElement, TimelineItemProps>(({ className, title, date, children }, ref) => {
  return (
    <div ref={ref} className={`${className} timeline-item`}>
      <div className="timeline-item__marker" />
      <div className="timeline-item__content">
        <p>{date.toISOString()}</p>
        <p>{title}</p>
        {children}
      </div>
    </div>
  );
});

import { PropsWithChildren } from 'react';

export type TimelineItemProps = PropsWithChildren<{
  className?: string;
  date: Date;
  title: string;
}>;

export function TimelineItem({ className, title, date, children }: TimelineItemProps) {
  return (
    <div className={className}>
      <p>{date.toISOString()}</p>
      <p>{title}</p>
      {children}
    </div>
  );
}

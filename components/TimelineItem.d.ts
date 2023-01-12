import { PropsWithChildren } from 'react';
export declare type TimelineItemProps = PropsWithChildren<{
    className?: string;
    date: Date;
    title: string;
}>;
export declare const TimelineItem: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    date: Date;
    title: string;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;

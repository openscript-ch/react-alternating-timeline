import { PropsWithKey, TimelineItemProps } from './TimelineItem';
declare type OffsetConfig = number | {
    left?: number;
    right?: number;
};
export declare type TimelineProps = {
    items: PropsWithKey<TimelineItemProps>[];
    gap?: number;
    offset?: OffsetConfig;
};
export declare function Timeline(props: TimelineProps): JSX.Element;
export {};

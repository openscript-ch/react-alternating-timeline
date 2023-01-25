import { PropsWithKey, TimelineItemProps } from './TimelineItem';
import { OffsetConfig } from '../models/offset';
import { Positioning } from '../models/positioning';
export declare type TimelineProps = {
    items: PropsWithKey<TimelineItemProps>[];
    positioning: Positioning;
    gap?: number;
    offset?: OffsetConfig;
    minMarkerGap?: number;
    dateFormat?: string;
    dateLocale?: Locale;
    className?: string;
};
export declare function Timeline(props: TimelineProps): JSX.Element;

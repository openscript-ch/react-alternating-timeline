import { ReactElement } from 'react';
import { PropsWithKey, TimelineItemProps } from './TimelineItem';
import { OffsetConfig } from '../models/offset';
import { Positioning } from '../models/positioning';
import { StyleConfig } from '../models/style';
export declare type TimelineProps = {
    items: PropsWithKey<TimelineItemProps>[];
    positioning: Positioning;
    gap?: number;
    offset?: OffsetConfig;
    minMarkerGap?: number;
    dateFormat?: string;
    dateLocale?: Locale;
    customMarker?: ReactElement;
    customPointer?: ReactElement;
    styleConfig?: StyleConfig;
    className?: string;
};
export declare function Timeline(props: TimelineProps): JSX.Element;

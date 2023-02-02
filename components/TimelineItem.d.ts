import { Key, PropsWithChildren, ReactElement } from 'react';
export declare type PropsWithKey<T> = T & {
    key: Key;
};
export declare type TimelineItemRefs = {
    pointer: HTMLDivElement | null;
    item: HTMLDivElement | null;
    marker: HTMLDivElement | null;
};
export declare type TimelineItemProps = PropsWithChildren<{
    className?: string;
    date: Date | string;
    dateFormat?: string;
    dateLocale?: Locale;
    title: string;
    customMarker?: ReactElement;
    customPointer?: ReactElement;
}>;
export declare const TimelineItem: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    date: Date | string;
    dateFormat?: string | undefined;
    dateLocale?: Locale | undefined;
    title: string;
    customMarker?: ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
    customPointer?: ReactElement<any, string | import("react").JSXElementConstructor<any>> | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<TimelineItemRefs>>;

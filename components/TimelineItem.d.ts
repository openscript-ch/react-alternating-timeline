import { Key, PropsWithChildren } from 'react';
export declare type PropsWithKey<T> = T & {
    key: Key;
};
export declare type TimelineItemProps = PropsWithChildren<{
    className?: string;
    date: Date | string;
    dateFormat?: string;
    dateLocale?: Locale;
    title: string;
}>;
export declare const TimelineItem: import("react").ForwardRefExoticComponent<{
    className?: string | undefined;
    date: Date | string;
    dateFormat?: string | undefined;
    dateLocale?: Locale | undefined;
    title: string;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLDivElement>>;

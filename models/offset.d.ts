import { Positioning } from './positioning';
export declare type Offset = {
    left?: number;
    right?: number;
};
export declare type OffsetConfig = number | Offset;
export declare const resolveOffsets: (offset: OffsetConfig, positioning: Positioning) => {
    right: number;
    left: number;
};

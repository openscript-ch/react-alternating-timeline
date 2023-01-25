import { Positioning } from './positioning';

export type Offset = { left?: number; right?: number };

export type OffsetConfig = number | Offset;

export const resolveOffsets = (offset: OffsetConfig, positioning: Positioning) =>
  typeof offset === 'number'
    ? { right: positioning === 'right' ? 0 : offset, left: positioning !== 'right' ? 0 : offset }
    : { right: offset.right ?? 0, left: offset.left ?? 0 };

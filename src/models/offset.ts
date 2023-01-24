export type Offset = { left?: number; right?: number };

export type OffsetConfig = number | Offset;

export const resolveOffsets = (offset: OffsetConfig) =>
  typeof offset === 'number' ? { right: offset, left: 0 } : { right: offset.right ?? 0, left: offset.left ?? 0 };

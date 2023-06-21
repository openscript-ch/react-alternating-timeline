import { CSSProperties } from 'react';
import { camelCaseToKebabCase, flattenObject } from '../helper/object';

export type StyleConfig = {
  line?: {
    width?: CSSProperties['width'];
    color?: CSSProperties['backgroundColor'];
    overhang?: CSSProperties['paddingBlock'];
  };
  item?: {
    gap?: CSSProperties['gap'];
    startOffset?: {
      left?: CSSProperties['marginTop'];
      right?: CSSProperties['marginTop'];
    };
  };
  marker?: {
    size?: CSSProperties['width'];
    color?: CSSProperties['backgroundColor'];
    radius?: CSSProperties['borderRadius'];
  };
  pointer?: {
    height?: CSSProperties['height'];
    width?: CSSProperties['width'];
    minOffset?: CSSProperties['marginTop'];
  };
  card?: {
    background?: CSSProperties['backgroundColor'];
    radius?: CSSProperties['borderRadius'];
    shadow?: CSSProperties['boxShadow'];
    padding?: CSSProperties['padding'];
    offset?: CSSProperties['gap'];
  };
};

export const convertToCssVariable = (styleConfig: StyleConfig) =>
  Object.entries(flattenObject(styleConfig, '-', camelCaseToKebabCase)).reduce(
    (prev: Record<string, string>, [key, value]) => ({ ...prev, [`--${key}`]: typeof value === 'number' ? `${value}px` : value }),
    {},
  );

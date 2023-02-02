import { flattenObject } from '../helper/object';

export type StyleConfig = {
  line?: {
    width?: string;
    color?: string;
  };
  marker?: {
    size?: string;
    color?: string;
    radius?: string;
  };
  pointer?: {
    height?: string;
    width?: string;
  };
  card?: {
    background?: string;
    radius?: string;
    offset?: string;
    shadow?: string;
    padding?: string;
  };
};

export const convertToCssVariable = (styleConfig: StyleConfig) =>
  Object.entries(flattenObject(styleConfig, '-')).reduce(
    (prev: Record<string, string>, [key, value]) => ({ ...prev, [`--${key}`]: value }),
    {},
  );

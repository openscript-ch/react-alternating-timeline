export const flattenObject = <O extends Record<string, T>, T extends O | string | undefined>(
  ob: Record<string, T>,
  delimiter?: string,
  keyTransformer: (key: string) => string = (key) => key,
) => {
  const result: Record<string, string> = {};

  Object.keys(ob).forEach((i) => {
    const value = ob[i];
    if (typeof value === 'object') {
      const temp = flattenObject(value, delimiter);
      Object.keys(temp).forEach((j) => {
        result[`${keyTransformer(i)}${delimiter ?? '.'}${j}`] = temp[j];
      });
    } else if (value) {
      result[keyTransformer(i)] = value;
    }
  });

  return result;
};

export const camelCaseToKebabCase = (value: string) =>
  value
    .split(/(?=[A-Z])/g)
    .join('-')
    .toLowerCase();

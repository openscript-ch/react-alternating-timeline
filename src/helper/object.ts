export const flattenObject = <O extends Record<string, T>, T extends O | string | undefined>(ob: Record<string, T>, delimiter?: string) => {
  const result: Record<string, string> = {};

  Object.keys(ob).forEach((i) => {
    const value = ob[i];
    if (typeof value === 'object') {
      const temp = flattenObject(value, delimiter);
      Object.keys(temp).forEach((j) => {
        result[`${i}${delimiter ?? '.'}${j}`] = temp[j];
      });
    } else if (value) {
      result[i] = value;
    }
  });

  return result;
};

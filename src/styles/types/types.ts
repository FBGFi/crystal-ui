/** Color shades */
export type ColorVariant = "__dark" | "__light";
/** Color */
export type Color = {
  [variant in ColorVariant]: {
    [variantKey: `__${number}`]: `hsl(${number}, ${number}%, ${number}%)`;
  };
};

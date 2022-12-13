import { ThemeOption } from "../../types/types";

/** Color shades */
export type ColorVariant = `__${ThemeOption}`;
/** Color */
export type Color = {
  [variant in ColorVariant]: {
    [variantKey: `__${number}`]: `hsl(${number}, ${number}%, ${number}%)`;
  };
};

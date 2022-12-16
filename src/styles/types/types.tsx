import React from "react";
import { ThemeOption } from "../../types/types";

/** Color shades */
export type ColorVariant = `__${ThemeOption}`;

type ColorVariantKey = `__${number}` | `__disabled`;
/** Color */
export type Color = {
  [variant in ColorVariant]: {
    [variantKey in ColorVariantKey]: `hsl(${number}, ${number}%, ${number}%)`;
  };
};

// TODO wait for TS 5.0 and const types
/** Interface for configuring CSS options for components */
export interface VisualConfig {
  [key: string]: {
    [key: string]: {
      [key in keyof React.CSSProperties]: {
        [colorVariant in ColorVariant]: React.CSSProperties[keyof React.CSSProperties];
      };
    };
  };
}

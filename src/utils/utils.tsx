import { Styles } from "jss";
import { createUseStyles } from "react-jss";
import { DefaultStyleProps } from "../types/types";
import { ColorVariant } from "../styles/types/types";

/**
 * Wrapper for adding typings for dynamic options for JSS
 */
export function createDynamicStyles<T = DefaultStyleProps>(
  styles: Styles<string, T>,
) {
  return createUseStyles<string, T>(styles);
}

/**
 * Swap color for opposite
 */
export const opposeColor = (colorVariant: ColorVariant): ColorVariant =>
  colorVariant === "__dark" ? "__light" : "__dark";

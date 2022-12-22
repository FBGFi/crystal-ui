import { Styles } from "jss";
import { createUseStyles } from "react-jss";
import { DefaultStyleProps } from "../types/types";
import { ColorVariant } from "../styles/types/types";

const baseStyles: Styles = {
  __linear_background__animated: {
    backgroundSize: "300% 300%",
    transition: "0.4s ease-in",
  },
  __linear_background__start: {
    backgroundPosition: "0% 0%",
  },
  __linear_background__end: {
    backgroundPosition: "100% 100%",
  },
};

/**
 * Wrapper for adding typings for dynamic options for JSS
 */
export function createDynamicStyles<T = DefaultStyleProps>(
  styles: Styles<string, T>,
) {
  return createUseStyles<string, T>({ ...baseStyles, ...styles });
}

/**
 * Swap color for opposite
 */
export const opposeColor = (colorVariant: ColorVariant): ColorVariant =>
  colorVariant === "__dark" ? "__light" : "__dark";

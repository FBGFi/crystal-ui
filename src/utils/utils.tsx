import { Styles } from "jss";
import { createUseStyles } from "react-jss";
import { DefaultStyleProps } from "../types/types";

/**
 * Wrapper for adding typings for dynamic options for JSS
 */
export function createDynamicStyles<T = DefaultStyleProps>(
  styles: Styles<string, T>,
) {
  return createUseStyles<string, T>(styles);
}

import { ColorVariant } from "../styles/types/types";

/** Different themes */
export type ThemeOption = "dark" | "light";

/** Default keys for JSS callback functions */
export interface DefaultStyleProps {
  colorVariant: ColorVariant;
}

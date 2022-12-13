import React from "react";
import { ThemeOption } from "./types/types";
import { ThemeContextProvider } from "./utils/hooks/useTheme";
import "./__index.scss";

interface CrystalBaseLineProps {
  theme: ThemeOption;
}

export const CrystalBaseLine: React.FC<
  React.PropsWithChildren & CrystalBaseLineProps
> = ({ theme = "dark", children }) => {
  return <ThemeContextProvider theme={theme}>{children}</ThemeContextProvider>;
};

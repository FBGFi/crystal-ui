import React from "react";
import { ThemeOption } from "./types/types";
import { ThemeContextProvider } from "./utils/hooks/useTheme";
import "./__index.scss";

interface CrystalBaseLineProps {
  theme: ThemeOption;
  screenHeightBreakPoint?: number;
}

export const CrystalBaseLine: React.FC<
  React.PropsWithChildren & CrystalBaseLineProps
> = ({ theme = "dark", children, screenHeightBreakPoint }) => {
  return (
    <ThemeContextProvider
      theme={theme}
      screenHeightBreakPoint={screenHeightBreakPoint}>
      {children}
    </ThemeContextProvider>
  );
};

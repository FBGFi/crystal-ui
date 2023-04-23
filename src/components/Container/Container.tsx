import React from "react";
import { useTheme } from "../../utils/hooks/useTheme";
import { containerStyles } from "./styles";

export type ContainerProps = React.PropsWithChildren & {};

export const Container: React.FC<ContainerProps> = ({ children }) => {
  const { getThemeDefaultStyleKeys } = useTheme();
  const styles = containerStyles(getThemeDefaultStyleKeys());
  return <div className={styles.__container}>{children}</div>;
};

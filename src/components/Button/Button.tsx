import React from "react";
import { clsx } from "clsx";
import { useTheme } from "../../utils/hooks/useTheme";
import { buttonStyles } from "./styles";

interface ButtonProps {
  /** Inner content of the button, string or HTML */
  content: string | React.ReactNode;
  /** On button click event */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Optional styling for the button */
  style?: React.CSSProperties;
  /** List of optional classnames for the button */
  classNames?: string[];
  /** Button size */
  size?: "regular" | "small" | "large";
}

export const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  style,
  classNames = [],
  size = "regular",
}) => {
  const { getThemeDefaultStyleKeys } = useTheme();
  const styles = buttonStyles(getThemeDefaultStyleKeys());
  const componentClassName = clsx([
    styles.__button,
    styles.__linear_background__animated,
    `crystal_ui__text__${size}`,
    ...classNames,
  ]);
  return (
    <button onClick={onClick} className={componentClassName} style={style}>
      {content}
    </button>
  );
};

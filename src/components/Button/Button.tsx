import React from "react";
import { clsx } from "clsx";
import colors from "../../styles/colors";
import { useTheme } from "../../utils/hooks/useTheme";
import { createDynamicStyles } from "../../utils/utils";

interface ButtonProps {
  /** Inner content of the button, string or HTML */
  content: string | React.ReactNode;
  /** On button click event */
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  /** Optional styling for the button */
  style?: React.CSSProperties;
  /** List of optional classnames for the button */
  classNames?: string[];
}

const buttonStyles = createDynamicStyles({
  __button: {
    backgroundColor: ({ colorVariant }) => colors.orange[colorVariant]["__1"],
  },
});

export const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  style,
  classNames = [],
}) => {
  const { getThemeDefaultStyleKeys } = useTheme();
  const styles = buttonStyles(getThemeDefaultStyleKeys());
  const componentClassName = clsx([styles.__button, ...classNames]);
  return (
    <button onClick={onClick} className={componentClassName} style={style}>
      {content}
    </button>
  );
};

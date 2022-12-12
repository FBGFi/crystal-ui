import React from "react";
import { createUseStyles } from "react-jss";
import { clsx } from "clsx";
import colors from "../../styles/colors";

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

const buttonStyles = createUseStyles({
  __button: {
    backgroundColor: colors.orange.__dark.__1,
  },
});

export const Button: React.FC<ButtonProps> = ({
  content,
  onClick,
  style,
  classNames = [],
}) => {
  const styles = buttonStyles();
  const componentClassName = clsx([styles.__button, ...classNames]);
  return (
    <button onClick={onClick} className={componentClassName} style={style}>
      {content}
    </button>
  );
};

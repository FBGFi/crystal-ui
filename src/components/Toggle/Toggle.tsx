import React from "react";
import { createDynamicStyles } from "../../utils/utils";

interface ToggleProps {}

const toggleStyles = createDynamicStyles({
  __toggle: {
    position: "relative",
    display: "inline-block",
    width: 60,
    height: 34,

    "& input": {
      opacity: 0,
      width: 0,
      height: 0,

      "&:checked + $__toggle__slider": {
        backgroundColor: "#2196F3",
      },

      "&:focus + $__toggle__slider": {
        boxShadow: "0 0 1px #2196F3",
      },

      "&:checked + $__toggle__slider:before": {
        transform: "translateX(26px)",
      },
    },
  },
  __toggle__slider: {
    position: "absolute",
    cursor: "pointer",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#ccc",
    transition: ".4s",

    "&:before": {
      position: "absolute",
      content: '""',
      height: 26,
      width: 26,
      left: 4,
      bottom: 4,
      backgroundColor: "white",
      transition: ".4s",
    },
  },
});

export const Toggle: React.FC<ToggleProps> = ({}) => {
  const styles = toggleStyles();
  return (
    <label className={styles.__toggle}>
      <input type="checkbox" />
      <span className={styles.__toggle__slider} />
    </label>
  );
};

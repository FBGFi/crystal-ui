import React from "react";
import { useTheme } from "../../utils/hooks/useTheme";
import { createDynamicStyles } from "../../utils/utils";

type ToggleOption<T = string> = {
  label?: string;
  option: T;
};

export interface ToggleProps<T = string> {
  options: [ToggleOption<T>, ToggleOption<T>];
}

const toggleStyles = createDynamicStyles({
  __toggle: ({ screenHeightBreakPoint }) => ({
    position: "relative",
    display: "inline-block",
    width: screenHeightBreakPoint ? "6rem" : 60,
    height: screenHeightBreakPoint ? "3.4rem" : 34,

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
  }),
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

export function Toggle<T = string>({ options }: ToggleProps<T>) {
  const [currentValue, setCurrentValue] = React.useState<1 | 0>(0);
  const { getThemeDefaultStyleKeys } = useTheme();
  const styles = toggleStyles(getThemeDefaultStyleKeys());

  const onChange = () => {
    setCurrentValue(Math.abs(currentValue - 1) as 0 | 1);
  };

  return (
    <label className={styles.__toggle}>
      <input type="checkbox" checked={currentValue === 1} onChange={onChange} />
      <span className={styles.__toggle__slider} />
      <span>{options[currentValue].label}</span>
    </label>
  );
}

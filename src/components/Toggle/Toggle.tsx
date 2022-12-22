import React from "react";
import { useTheme } from "../../utils/hooks/useTheme";
import { toggleStyles } from "./styles";

type ToggleOption<T = string> = {
  label?: string;
  option: T;
};

export interface ToggleProps<T = string> {
  options: [ToggleOption<T>, ToggleOption<T>];
  onToggle: (value: T) => void;
}

export function Toggle<T = string>({ options, onToggle }: ToggleProps<T>) {
  const [currentValue, setCurrentValue] = React.useState<1 | 0>(0);
  const { getThemeDefaultStyleKeys } = useTheme();
  const styles = toggleStyles(getThemeDefaultStyleKeys());

  const onChange = () => {
    const newValue = Math.abs(currentValue - 1) as 0 | 1;
    setCurrentValue(newValue);
    onToggle(options[newValue].option);
  };

  return (
    <label className={styles.__toggle}>
      <input type="checkbox" checked={currentValue === 1} onChange={onChange} />
      <span className={styles.__toggle__slider} />
      <span>{options[currentValue].label}</span>
    </label>
  );
}

import React from "react";
import { ThemeOption } from "../../types/types";
import { useTheme } from "../../utils/hooks/useTheme";
import { Toggle } from "./Toggle";

export const ThemeToggle: React.FC = () => {
  const { setTheme } = useTheme();
  return (
    <Toggle<ThemeOption>
      onToggle={setTheme}
      options={[
        { label: "Dark", option: "dark" },
        { label: "Light", option: "light" },
      ]}
    />
  );
};

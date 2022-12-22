import React from "react";
import { CrystalBaseLine } from "../src";
import { ThemeToggle } from "../src/components/Toggle/ThemeToggle";
import colors from "../src/styles/colors";

export const decorators = [
  (Story) => (
    <CrystalBaseLine theme="dark" screenHeightBreakPoint={1080}>
      <div style={{paddingBottom: "1rem", marginBottom: "1rem", borderBottom: `0.1rem solid ${colors.purple.__dark.__disabled}`}}>
      <ThemeToggle />
      </div>
      <Story />
    </CrystalBaseLine>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
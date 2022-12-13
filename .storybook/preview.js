import React from "react";
import { CrystalBaseLine } from "../src";

export const decorators = [
  (Story) => (
    <CrystalBaseLine theme="dark" screenHeightBreakPoint={1080}>
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
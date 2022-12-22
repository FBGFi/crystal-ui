import React from "react";
import { Story, ComponentMeta } from "@storybook/react";

import { Toggle, ToggleProps } from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle,
  argTypes: {},
} as ComponentMeta<typeof Toggle>;

const Template: Story<ToggleProps> = ({ options, onToggle }) => (
  <Toggle onToggle={onToggle} options={options} />
);

export const Primary = Template.bind({});
const primaryArgs: ToggleProps = {
  options: [
    {
      label: "On",
      option: "on",
    },
    {
      label: "Off",
      option: "off",
    },
  ],
  onToggle: (value: string) => console.log(value),
};
Primary.args = primaryArgs;

import React from "react";
import { Story, Meta } from "@storybook/react";

import { Toggle } from "./Toggle";

export default {
  title: "Toggle",
  component: Toggle,
  argTypes: {},
} as Meta<typeof Toggle>;

const Template: Story<any> = (args) => <Toggle {...args} />;

export const Primary = Template.bind({});

Primary.args = {};

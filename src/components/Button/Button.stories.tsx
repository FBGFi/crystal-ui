import React from "react";
import { Story, Meta } from "@storybook/react";

import { Button } from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    content: {
      name: "content",
      type: { name: "string", required: true },
      control: {
        type: "text",
      },
    },
  },
} as Meta<typeof Button>;

const Template: Story<any> = (args) => <Button {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  content: "Button",
};

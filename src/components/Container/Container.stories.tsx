import React from "react";
import { Story, ComponentMeta } from "@storybook/react";

import { Container, ContainerProps } from "./Container";

export default {
  title: "Container",
  component: Container,
  argTypes: {},
} as ComponentMeta<typeof Container>;

const Template: Story<ContainerProps> = ({ children }) => (
  <Container>{children}</Container>
);

export const Primary = Template.bind({});

const primaryArgs: ContainerProps = {
  children: "Text",
};

Primary.args = primaryArgs;

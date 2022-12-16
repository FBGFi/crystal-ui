import React from "react";
import { Story } from "@storybook/react";
import colors from "./colors";

export default {
  title: "Docs/Colors",
  component: <></>,
  argTypes: {},
};

const Template: Story = () => (
  <div>
    {Object.entries(colors).map(([color, colorVariants]) =>
      Object.entries(colorVariants).map(([colorVariant, values]) => (
        <div
          key={color + colorVariant}
          style={{ backgroundColor: "#FFF", border: "2px solid black" }}>
          <h2 style={{ textAlign: "center" }}>{color + " " + colorVariant}</h2>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}>
            {Object.entries(values).map(([key, value]) => (
              <div
                key={key + value}
                style={{
                  margin: 5,
                }}>
                <div
                  style={{
                    backgroundColor: value,
                    border: "2px solid black",
                    margin: 5,
                    width: 50,
                    height: 50,
                  }}
                />
                <span
                  style={{
                    width: "100%",
                    fontSize: 13,
                    textAlign: "center",
                    display: "block",
                  }}>
                  {key}
                </span>
              </div>
            ))}
          </div>
        </div>
      )),
    )}
  </div>
);

export const Primary = Template.bind({});
Primary.args = {};

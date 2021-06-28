import React from "react";
import { Story, Meta } from "@storybook/react";
import Nav, { NavProps } from ".";
import Layout from "src";

export default {
  title: "Example/Nav",
  component: Nav,
} as Meta;

const Template: Story<NavProps> = (args) => (
  <div>
    <Nav {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  primary: true,
};

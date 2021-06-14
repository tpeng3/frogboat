import React from "react";
import { Story, Meta } from "@storybook/react";
import Nav, { NavProps } from ".";
import { Layout } from "@components/layout";

export default {
  title: "Example/Nav",
  component: Nav,
} as Meta;

const Template: Story<NavProps> = (args) => (
  <Layout>
    <Nav {...args} />
  </Layout>
);

export const Default = Template.bind({});
Default.args = {
  primary: true,
};

import React from 'react';
import { Story, Meta } from '@storybook/react';
import Nav, { NavProps } from '.';

export default {
  title: 'Example/Nav',
  component: Nav,
} as Meta;

const Template: Story<NavProps> = (args) => <Nav {...args} />;

export const Default = Template.bind({});
Default.args = {
  primary: true
};
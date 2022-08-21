import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DarkModeToggle } from './dark-mode-toggle';

export default {
  component: DarkModeToggle,
  title: 'DarkModeToggle',
} as ComponentMeta<typeof DarkModeToggle>;

const Template: ComponentStory<typeof DarkModeToggle> = (args) => (
  <DarkModeToggle {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};

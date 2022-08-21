import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Card } from './card';

export default {
  component: Card,
  title: 'Card',
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;
const TemplateWithImage: ComponentStory<typeof Card> = (args) => (
  <Card {...args}>
    <img
      src="https://placeimg.com/400/225/arch"
      alt="Shoes"
      className="rounded-xl"
    />
  </Card>
);

export const Primary = Template.bind({});
export const WithLink = Template.bind({});
export const WithImage = TemplateWithImage.bind({});
Primary.args = {
  title: 'hello',
};
WithLink.args = {
  title: 'hello',
  url: 'https://www.google.com',
};
WithImage.args = {
  title: 'hello',
};

import type { Meta, StoryObj } from "@storybook/react";
import { Text } from "@/components/retroui/Text";

const meta: Meta<typeof Text> = {
  component: Text,
  title: "retroui/Text",
  tags: ["autodocs"],
  argTypes: {
    as: {
      control: "select",
      options: ["p", "li", "a", "h1", "h2", "h3", "h4", "h5", "h6"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Paragraph: Story = {
  args: {
    children: "This is a paragraph.",
    as: "p",
  },
};

export const Heading1: Story = {
  args: {
    children: "Heading 1",
    as: "h1",
  },
};

export const Heading2: Story = {
  args: {
    children: "Heading 2",
    as: "h2",
  },
};

export const Heading3: Story = {
  args: {
    children: "Heading 3",
    as: "h3",
  },
};

export const Link: Story = {
  args: {
    children: "Link text",
    as: "a",
    href: "#",
  },
};

export const AllHeadings: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text as="h1">Heading 1</Text>
      <Text as="h2">Heading 2</Text>
      <Text as="h3">Heading 3</Text>
      <Text as="h4">Heading 4</Text>
      <Text as="h5">Heading 5</Text>
      <Text as="h6">Heading 6</Text>
    </div>
  ),
};

export const BodyAndLink: Story = {
  render: () => (
    <div className="flex flex-col gap-2">
      <Text as="p">This is a paragraph of body text.</Text>
      <Text as="a" href="#">
        This is a link
      </Text>
    </div>
  ),
};

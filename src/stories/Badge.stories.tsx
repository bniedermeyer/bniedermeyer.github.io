import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@/components/retroui/Badge";

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: "retroui/Badge",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "outline", "solid", "surface"],
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    children: "Badge",
    variant: "default",
    size: "md",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline",
    variant: "outline",
    size: "md",
  },
};

export const Solid: Story = {
  args: {
    children: "Solid",
    variant: "solid",
    size: "md",
  },
};

export const Surface: Story = {
  args: {
    children: "Surface",
    variant: "surface",
    size: "md",
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Badge variant="default">Default</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="solid">Solid</Badge>
      <Badge variant="surface">Surface</Badge>
    </div>
  ),
};

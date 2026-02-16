import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "@/components/retroui/Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "retroui/Card",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    children: "Card content",
  },
};

export const WithHeader: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Description>
          Card description with additional context.
        </Card.Description>
      </Card.Header>
    </Card>
  ),
};

export const Complete: Story = {
  render: () => (
    <Card>
      <Card.Header>
        <Card.Title>Card title</Card.Title>
        <Card.Description>
          Card description with additional context.
        </Card.Description>
      </Card.Header>
      <Card.Content>
        <p>Card content goes here. This is the main body of the card.</p>
      </Card.Content>
    </Card>
  ),
};

export const MultipleCards: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Card className="w-64">
        <Card.Header>
          <Card.Title>Card 1</Card.Title>
          <Card.Description>First card description</Card.Description>
        </Card.Header>
        <Card.Content>Content for card 1.</Card.Content>
      </Card>
      <Card className="w-64">
        <Card.Header>
          <Card.Title>Card 2</Card.Title>
          <Card.Description>Second card description</Card.Description>
        </Card.Header>
        <Card.Content>Content for card 2.</Card.Content>
      </Card>
      <Card className="w-64">
        <Card.Header>
          <Card.Title>Card 3</Card.Title>
          <Card.Description>Third card description</Card.Description>
        </Card.Header>
        <Card.Content>Content for card 3.</Card.Content>
      </Card>
    </div>
  ),
};

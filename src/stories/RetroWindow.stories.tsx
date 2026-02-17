import type { Meta, StoryObj } from "@storybook/react";
import { RetroWindow } from "@/components/retroui/RetroWindow";

const meta: Meta<typeof RetroWindow> = {
  component: RetroWindow,
  title: "RetroWindow",
  tags: ["autodocs"],
  argTypes: {
    title: {
      control: "text",
    },
    className: {
      control: "text",
    },
  },
};

export default meta;

type Story = StoryObj<typeof RetroWindow>;

export const Default: Story = {
  args: {
    title: "Window Title",
    children: "This is the window content.",
  },
};

export const WithCustomClassName: Story = {
  args: {
    title: "Custom Styled",
    children: "This window has a custom class applied.",
    className: "max-w-md",
  },
};

export const WithRichContent: Story = {
  render: () => (
    <RetroWindow title="Rich Content">
      <div className="flex flex-col gap-3">
        <h2 className="text-lg font-bold">Heading</h2>
        <p>Some paragraph text inside the retro window.</p>
        <ul className="list-disc pl-5">
          <li>Item one</li>
          <li>Item two</li>
          <li>Item three</li>
        </ul>
      </div>
    </RetroWindow>
  ),
};

export const MultipleWindows: Story = {
  render: () => (
    <div className="flex flex-col gap-6">
      <RetroWindow title="First Window">
        Content of the first window.
      </RetroWindow>
      <RetroWindow title="Second Window">
        Content of the second window.
      </RetroWindow>
    </div>
  ),
};

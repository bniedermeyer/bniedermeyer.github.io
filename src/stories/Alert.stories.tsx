import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@/components/retroui/Alert";

const meta: Meta<typeof Alert> = {
  component: Alert,
  title: "retroui/Alert",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["default", "solid"],
    },
    status: {
      control: "select",
      options: ["error", "success", "warning", "info"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: "This is a default alert.",
    variant: "default",
  },
};

export const Solid: Story = {
  args: {
    children: "This is a solid alert.",
    variant: "solid",
  },
};

export const Error: Story = {
  args: {
    children: "This is an error alert.",
    status: "error",
  },
};

export const Success: Story = {
  args: {
    children: "This is a success alert.",
    status: "success",
  },
};

export const Warning: Story = {
  args: {
    children: "This is a warning alert.",
    status: "warning",
  },
};

export const Info: Story = {
  args: {
    children: "This is an info alert.",
    status: "info",
  },
};

export const WithTitleAndDescription: Story = {
  render: () => (
    <Alert>
      <Alert.Title>Alert title</Alert.Title>
      <Alert.Description>
        This is the alert description with additional context.
      </Alert.Description>
    </Alert>
  ),
};

export const StatusVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Alert status="error">
        <Alert.Title>Error</Alert.Title>
        <Alert.Description>Something went wrong.</Alert.Description>
      </Alert>
      <Alert status="success">
        <Alert.Title>Success</Alert.Title>
        <Alert.Description>Your changes have been saved.</Alert.Description>
      </Alert>
      <Alert status="warning">
        <Alert.Title>Warning</Alert.Title>
        <Alert.Description>Please review before continuing.</Alert.Description>
      </Alert>
      <Alert status="info">
        <Alert.Title>Info</Alert.Title>
        <Alert.Description>Here is some helpful information.</Alert.Description>
      </Alert>
    </div>
  ),
};

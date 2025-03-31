import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  decorators: [
    (Story) => (
      <div
        style={{ width: "300px", display: "flex", justifyContent: "center" }}
      >
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    onClick: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "Submit",
  },
};

export const PrimaryColor: Story = {
  args: {
    label: "Button",
    color: "primary",
  },
};

export const SecondaryColor: Story = {
  args: {
    label: "Button",
    color: "secondary",
    icon: true,
  },
};

export const TertiaryColor: Story = {
  args: {
    label: "Button",
    color: "tertiary",
  },
};

export const BackgroundColor: Story = {
  args: {
    label: "Button",
    color: "background",
  },
};

export const SmallSize: Story = {
  args: {
    label: "Button",
    size: "small",
  },
};

export const MediumSize: Story = {
  args: {
    label: "Button",
    size: "medium",
  },
};

export const LargeSize: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const ExtraLargeSize: Story = {
  args: {
    label: "Button",
    size: "extralarge",
  },
};

export const FullWidth: Story = {
  args: {
    label: "Button",
    size: "small",
    width: "full",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { Footer } from "./footer";

const meta: Meta<typeof Footer> = {
  title: "Footer",
  component: Footer,
  decorators: [
    (Story) => (
      <div style={{ width: "100%", height: "80px", position: "relative" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Authenticated: Story = {
  args: {
    isLoggedIn: true,
  },
};

export const NoAuthenticated: Story = {
  args: {
    isLoggedIn: false,
  },
};

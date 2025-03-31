import type { Meta, StoryObj } from "@storybook/react";
import { ProfileHeader } from "./profile-header";

const meta: Meta<typeof ProfileHeader> = {
  title: "ProfileHeader",
  component: ProfileHeader,
  decorators: [
    (Story) => (
      <div
        style={{ backgroundColor: "#272727", height: "61px", padding: "10px" }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    firstname: "Mauricio",
    lastname: "Brito",
  },
};

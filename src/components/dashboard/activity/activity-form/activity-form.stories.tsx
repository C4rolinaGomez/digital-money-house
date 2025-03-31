import type { Meta, StoryObj } from "@storybook/react";
import { ActivityForm } from "./activity-form";

const meta: Meta<typeof ActivityForm> = {
  title: "ActivityForm",
  component: ActivityForm,
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: "#eeeaea", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { ProfileEditorForm } from "./profile-editor-form";

const meta: Meta<typeof ProfileEditorForm> = {
  title: "ProfileEditorForm",
  component: ProfileEditorForm,
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

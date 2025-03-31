import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./input";
import { FormProvider, useForm } from "react-hook-form";

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  decorators: [
    (Story) => (
      <div
        style={{ width: "500px", display: "flex", justifyContent: "center" }}
      >
        <FormProvider {...useForm()}>
          <Story />
        </FormProvider>
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    fieldName: "name",
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const InputText: Story = {
  args: {
    type: "text",
    placeholder: "Placeholder",
    size: "normal",
  },
};

export const InputPassword: Story = {
  args: {
    type: "password",
    placeholder: "Password",
    size: "normal",
  },
};

export const SmallSize: Story = {
  args: {
    type: "text",
    placeholder: "Username",
    size: "small",
  },
};

export const NormalSize: Story = {
  args: {
    type: "text",
    placeholder: "Password",
    size: "normal",
  },
};

export const FullWidth: Story = {
  args: {
    type: "text",
    placeholder: "Username",
    size: "small",
    width: "full",
  },
};

export const WithIcon: Story = {
  args: {
    type: "text",
    placeholder: "Buscar",
    size: "small",
    width: "full",
    icon: "/search.svg",
  },
};

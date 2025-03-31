import type { Meta, StoryObj } from "@storybook/react";
import { Small } from "./small";

const meta: Meta<typeof Small> = {
  title: "Small",
  component: Small,
  decorators: [
    (Story) => (
      <div style={{ width: "300px", backgroundColor: "#000000" }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter especial, una mayúscula y un número)",
  },
};

export const SmallTextInvalid: Story = {
  args: {
    text: "Ocurrio un problema al intentar enviar el formulario.",
    invalid: true,
    textAlign: "center",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { FormLarge } from "./FormLarge";

const meta: Meta<typeof FormLarge> = {
  title: "FormLarge",
  component: FormLarge,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FormLarge>;

export const Primary: Story = {};

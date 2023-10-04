import type { Meta, StoryObj } from "@storybook/react";
import { FormMedium } from "./FormMedium";

const meta: Meta<typeof FormMedium> = {
  title: "FormMedium",
  component: FormMedium,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FormMedium>;

export const Primary: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { FormCheckBox } from "./FormCheckBox";

const meta: Meta<typeof FormCheckBox> = {
  title: "FormCheckBox",
  component: FormCheckBox,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FormCheckBox>;

export const Primary: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { FormNumber } from "./FormNumber";

const meta: Meta<typeof FormNumber> = {
  title: "FormNumber",
  component: FormNumber,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FormNumber>;

export const Primary: Story = {};

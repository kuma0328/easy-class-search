import type { Meta, StoryObj } from "@storybook/react";
import { FormPeople } from "./FormPeople";

const meta: Meta<typeof FormPeople> = {
  title: "FormPeople",
  component: FormPeople,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FormPeople>;

export const Primary: Story = {};

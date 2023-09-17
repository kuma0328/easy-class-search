import type { Meta, StoryObj } from "@storybook/react";
import { ClassTop } from "./ClassTop";

const meta: Meta<typeof ClassTop> = {
  title: "ClassTop",
  component: ClassTop,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof ClassTop>;

export const Primary: Story = {
  args: {
    title: "雇用関係法",
    code: "1103-001",
  },
};

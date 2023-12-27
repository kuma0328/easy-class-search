import type { Meta, StoryObj } from "@storybook/react";
import { CourseDetailBar } from "./CourseDetailBar";

const meta: Meta<typeof CourseDetailBar> = {
  title: "CourseDetailBar",
  component: CourseDetailBar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CourseDetailBar>;

export const Primary: Story = {
  args: {
    code: "1011-111",
    title: "雇用関係法",
  },
};

import type { Meta, StoryObj } from "@storybook/react";
import { CourseTitle } from "./CourseTtitle";

const meta: Meta<typeof CourseTitle> = {
  title: "CourseTitle",
  component: CourseTitle,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CourseTitle>;

export const Primary: Story = {
  args: {
    course_title: "雇用関係法",
  },
};

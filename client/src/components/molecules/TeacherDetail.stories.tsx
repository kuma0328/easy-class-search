import type { Meta, StoryObj } from "@storybook/react";
import { TeacherDetail } from "./TeacherDetail";

const meta: Meta<typeof TeacherDetail> = {
  title: "TeacherDetail",
  component: TeacherDetail,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TeacherDetail>;

export const Primary: Story = {};

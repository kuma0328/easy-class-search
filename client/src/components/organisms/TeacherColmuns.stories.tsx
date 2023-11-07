import type { Meta, StoryObj } from "@storybook/react";
import { TeacherColmuns } from "./TeacherColmuns";

const meta: Meta<typeof TeacherColmuns> = {
  title: "TeacherComuns",
  component: TeacherColmuns,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TeacherColmuns>;

export const Primary: Story = {};

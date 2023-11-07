import type { Meta, StoryObj } from "@storybook/react";
import { TeacherInfo } from "./TeacherInfo";
import TRadarChart from "src/types/RadarChart";

const meta: Meta<typeof TeacherInfo> = {
  title: "TeacherInfo",
  component: TeacherInfo,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TeacherInfo>;
const data: TRadarChart = {
  teacher: "Teacher 1",
  major: "法学部",
  data: [
    { subject: "A", A: 20.0 },
    { subject: "B", A: 30.0 },
    { subject: "C", A: 20.0 },
    { subject: "D", A: 20.0 },
    { subject: "F", A: 10.0 },
  ],
};

export const Primary: Story = {
  args: {
    data: data,
  },
};

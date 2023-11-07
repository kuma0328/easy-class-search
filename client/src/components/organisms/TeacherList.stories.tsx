import type { Meta, StoryObj } from "@storybook/react";
import { TeacherList } from "./TeacherList";
import TRadarChart from "src/types/RadarChart";

const meta: Meta<typeof TeacherList> = {
  title: "TeacherList",
  component: TeacherList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TeacherList>;

const teacherList: TRadarChart[] = [
  {
    teacher: "Teacher 1",
    major: "法学部",
    data: [
      { subject: "A", A: 20.0 },
      { subject: "B", A: 30.0 },
      { subject: "C", A: 20.0 },
      { subject: "D", A: 20.0 },
      { subject: "F", A: 10.0 },
    ],
  },
  {
    teacher: "Teacher 2",
    major: "法学部",
    data: [
      { subject: "A", A: 15.0 },
      { subject: "B", A: 25.0 },
      { subject: "C", A: 30.0 },
      { subject: "D", A: 20.0 },
      { subject: "F", A: 10.0 },
    ],
  },
  {
    teacher: "Teacher 3",
    major: "法学部",
    data: [
      { subject: "A", A: 18.0 },
      { subject: "B", A: 28.0 },
      { subject: "C", A: 22.0 },
      { subject: "D", A: 24.0 },
      { subject: "F", A: 8.0 },
    ],
  },
  {
    teacher: "Teacher 4",
    major: "法学部",
    data: [
      { subject: "A", A: 22.0 },
      { subject: "B", A: 32.0 },
      { subject: "C", A: 18.0 },
      { subject: "D", A: 26.0 },
      { subject: "F", A: 12.0 },
    ],
  },
  {
    teacher: "Teacher 5",
    major: "法学部",
    data: [
      { subject: "A", A: 19.0 },
      { subject: "B", A: 31.0 },
      { subject: "C", A: 21.0 },
      { subject: "D", A: 23.0 },
      { subject: "F", A: 9.0 },
    ],
  },
  {
    teacher: "Teacher 6",
    major: "法学部",
    data: [
      { subject: "A", A: 17.0 },
      { subject: "B", A: 27.0 },
      { subject: "C", A: 24.0 },
      { subject: "D", A: 22.0 },
      { subject: "F", A: 9.0 },
    ],
  },
  {
    teacher: "Teacher 7",
    major: "法学部",
    data: [
      { subject: "A", A: 21.0 },
      { subject: "B", A: 29.0 },
      { subject: "C", A: 23.0 },
      { subject: "D", A: 21.0 },
      { subject: "F", A: 11.0 },
    ],
  },
  {
    teacher: "Teacher 8",
    major: "法学部",
    data: [
      { subject: "A", A: 16.0 },
      { subject: "B", A: 26.0 },
      { subject: "C", A: 32.0 },
      { subject: "D", A: 18.0 },
      { subject: "F", A: 7.0 },
    ],
  },
  {
    teacher: "Teacher 9",
    major: "法学部",
    data: [
      { subject: "A", A: 14.0 },
      { subject: "B", A: 24.0 },
      { subject: "C", A: 29.0 },
      { subject: "D", A: 19.0 },
      { subject: "F", A: 10.0 },
    ],
  },
  {
    teacher: "Teacher 10",
    major: "法学部",
    data: [
      { subject: "A", A: 25.0 },
      { subject: "B", A: 35.0 },
      { subject: "C", A: 15.0 },
      { subject: "D", A: 15.0 },
      { subject: "F", A: 10.0 },
    ],
  },
];

export const Primary: Story = {
  args: {
    teacherList: teacherList,
  },
};

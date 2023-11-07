import type { Meta, StoryObj } from "@storybook/react";
import { CourseInfo } from "./CourseInfo";
import TCourseInfo from "src/types/CourseInfo";

const meta: Meta<typeof CourseInfo> = {
  title: "CourseInfo",
  component: CourseInfo,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CourseInfo>;

const courseInfo: TCourseInfo = {
  year: 2023,
  people: 50,
  teacher: ["John Doe", "Jane Smith"],
  place: "教室A",
  time: "月曜日 10:00 AM - 12:00 PM",
  rate_a: 0.2,
  rate_b: 0.3,
  rate_c: 0.4,
  rate_d: 0.05,
  rate_f: 0.05,
  rate_average: 3.5,
  syllabus_url: "https://example.com/syllabus/1",
  evaluation: [
    { text: "出席", percent: 50 },
    { text: "テスト", percent: 80 },
    // 他の評価項目も追加できます
  ],
};

export const Primary: Story = {
  args: {
    courseInfo: courseInfo,
  },
};

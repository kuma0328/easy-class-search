import type { Meta, StoryObj } from "@storybook/react";
import { Course } from "./Course";

import TCourseInfo from "src/types/Course";

const meta: Meta<typeof Course> = {
  title: "Course",
  component: Course,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Course>;

const courseInfo: TCourseInfo = {
  code: "111-1111",
  title: "雇用関係法",
  course_id: "111133",
  course_url: "http:/localhost",
  major: "法学部法律学科",
  people: 1100,
  place: "オンライン",
  time: "月１",
  rate_a: 1,
  rate_b: 2,
  rate_c: 3,
  rate_d: 4,
  rate_f: 5,
  rate_average: 6,
  season: "春",
  teacher: "川嶋士郎",
  year: 2002,
};

export const Primary: Story = {
  args: {
    courseInfo: courseInfo,
  },
};

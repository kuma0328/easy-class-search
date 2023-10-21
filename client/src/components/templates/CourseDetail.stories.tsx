import type { Meta, StoryObj } from "@storybook/react";
import { CourseDetail } from "./CourseDetail";
import TEvaluation from "src/types/Evaluation";
import TCourseInfo from "src/types/Course";

const meta: Meta<typeof CourseDetail> = {
  title: "CourseDetail",
  component: CourseDetail,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CourseDetail>;

const evaluationList: TEvaluation[] = [
  {
    text: "出席",
    percent: 50,
  },
  {
    text: "インターンシップ",
    percent: 30,
  },
  {
    text: "レポート",
    percent: 20,
  },
];
const courseList: TCourseInfo[] = [
  {
    code: "CS101",
    title: "Introduction to Computer Science",
    course_id: "CS101-001",
    course_url: "https://example.com/cs101",
    major: "Computer Science",
    people: 50,
    place: "Room 101",
    time: "MWF 10:00 AM - 11:30 AM",
    rate_a: 20,
    rate_b: 15,
    rate_c: 10,
    rate_d: 3,
    rate_f: 2,
    rate_average: 3.5,
    season: "Fall",
    teacher: "Prof. Smith",
    year: 2023,
    credit: 2,
  },
  {
    code: "MATH202",
    title: "Calculus II",
    course_id: "MATH202-001",
    course_url: "https://example.com/math202",
    major: "Mathematics",
    people: 40,
    place: "Room 201",
    time: "TTh 2:00 PM - 3:30 PM",
    rate_a: 18,
    rate_b: 12,
    rate_c: 7,
    rate_d: 2,
    rate_f: 1,
    rate_average: 3.8,
    season: "Spring",
    teacher: "Prof. Johnson",
    year: 2023,
    credit: 2,
  },
  {
    code: "ENG101",
    title: "English Composition",
    course_id: "ENG101-001",
    course_url: "https://example.com/eng101",
    major: "English",
    people: 35,
    place: "Room 105",
    time: "MWF 1:00 PM - 2:30 PM",
    rate_a: 15,
    rate_b: 10,
    rate_c: 8,
    rate_d: 2,
    rate_f: 0,
    rate_average: 4.0,
    season: "Fall",
    teacher: "Prof. Davis",
    year: 2023,
    credit: 2,
  },
  {
    code: "MATH202",
    title: "Calculus II",
    course_id: "MATH202-001",
    course_url: "https://example.com/math202",
    major: "Mathematics",
    people: 40,
    place: "Room 201",
    time: "TTh 2:00 PM - 3:30 PM",
    rate_a: 18,
    rate_b: 12,
    rate_c: 7,
    rate_d: 2,
    rate_f: 1,
    rate_average: 3.8,
    season: "Spring",
    teacher: "Prof. Johnson",
    year: 2023,
    credit: 2,
  },
  {
    code: "MATH202",
    title: "Calculus II",
    course_id: "MATH202-001",
    course_url: "https://example.com/math202",
    major: "Mathematics",
    people: 40,
    place: "Room 201",
    time: "TTh 2:00 PM - 3:30 PM",
    rate_a: 18,
    rate_b: 12,
    rate_c: 7,
    rate_d: 2,
    rate_f: 1,
    rate_average: 3.8,
    season: "Spring",
    teacher: "Prof. Johnson",
    year: 2023,
    credit: 2,
  },
  {
    code: "MATH202",
    title: "Calculus II",
    course_id: "MATH202-001",
    course_url: "https://example.com/math202",
    major: "Mathematics",
    people: 40,
    place: "Room 201",
    time: "TTh 2:00 PM - 3:30 PM",
    rate_a: 18,
    rate_b: 12,
    rate_c: 7,
    rate_d: 2,
    rate_f: 1,
    rate_average: 3.8,
    season: "Spring",
    teacher: "Prof. Johnson",
    year: 2023,
    credit: 2,
  },
];
export const Primary: Story = {
  args: {
    courseList: courseList,
    evaluationList: evaluationList,
  },
};
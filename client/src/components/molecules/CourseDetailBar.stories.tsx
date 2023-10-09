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
    place: "今出川",
    time: "水曜3限",
    credit: 2,
    teacherName: "川嶋四郎",
    course_url: "http://1001-111",
  },
};

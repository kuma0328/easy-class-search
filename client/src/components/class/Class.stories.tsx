import type { Meta, StoryObj } from "@storybook/react";
import { Class } from "./Class";

import TClass from "@/types/Class";

const meta: Meta<typeof Class> = {
  title: "Class",
  component: Class,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Class>;

const onClick = () => {
  window.alert("button click");
};

const classInfo: TClass = {
  subjectName: "雇用関係法",
  subjectCode: "1103-0039",
  teacherName: "田中 太郎",
  season: "春",
  place: "今出川",
  classTime: "水曜1限",
  rankA: 32,
  rankB: 10,
  rankC: 10,
  rankD: 10,
  rankE: 10,
  rankF: 9,
};

export const Primary: Story = {
  args: {
    classInfo: classInfo,
    // onClick : onClick,
  },
};

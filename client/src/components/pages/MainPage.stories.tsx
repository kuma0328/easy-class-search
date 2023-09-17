import type { Meta, StoryObj } from "@storybook/react";
import { MainPage } from "./MainPage";
import TClass from "@/types/Class";

const meta: Meta<typeof MainPage> = {
  title: "MainPage",
  component: MainPage,
  tags: ["autodocs"],
};
export default meta;

const classList: TClass[] = [
  {
    subjectName: "雇用関係法",
    subjectCode: "1103-0039",
    teacherName: "田中 太郎",
    season: "春",
    place: "今出川",
    classTime: "水曜1限",
    rank: {
      A: 32,
      B: 10,
      C: 10,
      D: 10,
      F: 9,
    },
  },
  {
    subjectName: "日本語",
    subjectCode: "1133-0329",
    teacherName: "田中 太郎2",
    season: "春",
    place: "今出川",
    classTime: "水曜2限",
    rank: {
      A: 32,
      B: 10,
      C: 10,
      D: 10,
      F: 9,
    },
  },
  {
    subjectName: "韓国語",
    subjectCode: "1123-9939",
    teacherName: "田中 太郎3",
    season: "春",
    place: "今出川",
    classTime: "水曜1限",
    rank: {
      A: 32,
      B: 10,
      C: 10,
      D: 10,
      F: 9,
    },
  },
  {
    subjectName: "中国語",
    subjectCode: "1203-0239",
    teacherName: "田中 太郎4",
    season: "春",
    place: "今出川",
    classTime: "水曜1限",
    rank: {
      A: 32,
      B: 10,
      C: 10,
      D: 10,
      F: 9,
    },
  },
  {
    subjectName: "ロシア語",
    subjectCode: "1203-0019",
    teacherName: "田中 太郎5",
    season: "春",
    place: "今出川",
    classTime: "水曜1限",
    rank: {
      A: 32,
      B: 10,
      C: 10,
      D: 10,
      F: 9,
    },
  },
];

type Story = StoryObj<typeof MainPage>;

export const Primary: Story = {
  args: {
    classList: classList
  }
};

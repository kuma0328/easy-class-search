import type { Meta, StoryObj } from "@storybook/react";
import { SelectGenreBarList } from "./SelectGenreBarList";
import TFilter from "src/types/Filter";
const meta: Meta<typeof SelectGenreBarList> = {
  title: "SelectGenreBarList",
  component: SelectGenreBarList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SelectGenreBarList>;

const genreList: string[] = ["学部", "年度", "人数", "場所", "季節"];
const majorFilter: TFilter[] = [
  {
    value: "",
    text: "学部を選択してください",
  },
  {
    value: "computer",
    text: "情報システム",
  },
  {
    value: "aaaa",
    text: "科学",
  },
  {
    value: "bbb",
    text: "数学",
  },
];
const seasonFilter: TFilter[] = [
  {
    value: "",
    text: "季節を選択してください",
  },
  {
    value: "spring",
    text: "春",
  },
  {
    value: "autumn",
    text: "秋",
  },
  {
    value: "onlin",
    text: "オンライン",
  },
];

export const Primary: Story = {
  args: {
    majorFilter: majorFilter,
    seasonFilter: seasonFilter,
  },
};

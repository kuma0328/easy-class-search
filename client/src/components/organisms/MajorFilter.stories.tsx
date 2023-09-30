import type { Meta, StoryObj } from "@storybook/react";
import { MajorFilter } from "./MajorFilter";
import TFilter from "src/types/Filter";

const meta: Meta<typeof MajorFilter> = {
  title: "MajorFilter",
  component: MajorFilter,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof MajorFilter>;

const filter: TFilter[] = [
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

export const Primary: Story = {
  args: {
    id: "学部",
    filter: filter,
  },
};

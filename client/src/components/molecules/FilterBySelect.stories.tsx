import type { Meta, StoryObj } from "@storybook/react";
import { FilterBySelect } from "./FilterBySelect";
import TFilter from "src/types/Filter";

const meta: Meta<typeof FilterBySelect> = {
  title: "FilterBySelect",
  component: FilterBySelect,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterBySelect>;

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

import type { Meta, StoryObj } from "@storybook/react";
import { FilterButton } from "./FilterButton";

const meta: Meta<typeof FilterButton> = {
  title: "FilterButton",
  component: FilterButton,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterButton>;

const selectList: TSelect[] = [
  {
    name: "春",
    value: "spring",
  },
  {
    name: "秋",
    value: "autumn",
  },
  {
    name: "通年",
    value: "all",
  },
];

export const Primary: Story = {
  args: {
    selectName: "学期",
    selectList: selectList,
  },
};

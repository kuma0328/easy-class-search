import type { Meta, StoryObj } from "@storybook/react";
import { FilterList } from "./FilterList";

const meta: Meta<typeof FilterList> = {
  title: "FilterList",
  component: FilterList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterList>;

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

const onClickSelect = (value: string) => {
  console.log(value);
};

export const Primary: Story = {
  args: {
    isOpen: true,
    selectList: selectList,
    onClickSelect: onClickSelect,
  },
};

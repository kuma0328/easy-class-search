import type { Meta, StoryObj } from "@storybook/react";
import { FilterTimeTable } from "./FilterTimeTable";

const meta: Meta<typeof FilterTimeTable> = {
  title: "FilterTimeTable",
  component: FilterTimeTable,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterTimeTable>;

export const Primary: Story = {
  args: {
    day: "月",
  },
};

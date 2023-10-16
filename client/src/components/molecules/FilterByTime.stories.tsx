import type { Meta, StoryObj } from "@storybook/react";
import { FilterByTime } from "./FilterByTime";

const meta: Meta<typeof FilterByTime> = {
  title: "FilterByTime",
  component: FilterByTime,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterByTime>;

export const Primary: Story = {};

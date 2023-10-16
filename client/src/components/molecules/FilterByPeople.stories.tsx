import type { Meta, StoryObj } from "@storybook/react";
import { FilterByPeople } from "./FilterByPeople";

const meta: Meta<typeof FilterByPeople> = {
  title: "FilterByPeople",
  component: FilterByPeople,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterByPeople>;

export const Primary: Story = {
  args: {
    id: "人数",
  },
};

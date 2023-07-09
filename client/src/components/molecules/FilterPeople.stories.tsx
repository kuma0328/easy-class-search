import type { Meta, StoryObj } from "@storybook/react";
import { FilterPeople } from "./FilterPeople";

const meta: Meta<typeof FilterPeople> = {
  title: "FilterPeople",
  component: FilterPeople,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterPeople>;

export const Primary: Story = {};

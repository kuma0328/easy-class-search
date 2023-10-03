import type { Meta, StoryObj } from "@storybook/react";
import { FilterButton } from "./FilterButton";

const meta: Meta<typeof FilterButton> = {
  title: "FilterButton",
  component: FilterButton,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterButton>;

export const Primary: Story = {};

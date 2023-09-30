import type { Meta, StoryObj } from "@storybook/react";
import { FilterMore } from "./FilterMore";

const meta: Meta<typeof FilterMore> = {
  title: "FilterMore",
  component: FilterMore,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterMore>;

export const Primary: Story = {};

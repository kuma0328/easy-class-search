import type { Meta, StoryObj } from "@storybook/react";
import { FilterClass } from "./FilterClass";

const meta: Meta<typeof FilterClass> = {
  title: "FilterClass",
  component: FilterClass,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterClass>;

export const Primary: Story = {};

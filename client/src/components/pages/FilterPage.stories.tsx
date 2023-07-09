import type { Meta, StoryObj } from "@storybook/react";
import { FilterPage } from "./FilterPage";

const meta: Meta<typeof FilterPage> = {
  title: "FilterPage",
  component: FilterPage,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterPage>;

export const Primary: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { SelectGenreBarList } from "./SelectGenreBarList";
const meta: Meta<typeof SelectGenreBarList> = {
  title: "SelectGenreBarList",
  component: SelectGenreBarList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SelectGenreBarList>;

export const Primary: Story = {
  args: {},
};

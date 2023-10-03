import type { Meta, StoryObj } from "@storybook/react";
import { SelectGenreBar } from "./SelectGenreBar";

const meta: Meta<typeof SelectGenreBar> = {
  title: "SelectGenreBar",
  component: SelectGenreBar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SelectGenreBar>;

export const Primary: Story = {
  args: {
    genre: "学部"
  }
};

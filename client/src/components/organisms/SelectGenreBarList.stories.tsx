import type { Meta, StoryObj } from "@storybook/react";
import { SelectGenreBarList } from "./SelectGenreBarList";

const meta: Meta<typeof SelectGenreBarList> = {
  title: "SelectGenreBarList",
  component: SelectGenreBarList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SelectGenreBarList>;

const genreList: string[] = ["学部", "年度", "人数", "場所", "季節"];

export const Primary: Story = {
  args: {
    genreList: genreList,
  },
};

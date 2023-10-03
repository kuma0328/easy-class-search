import type { Meta, StoryObj } from "@storybook/react";
import { SortColmuns } from "./SortColmuns";

const meta: Meta<typeof SortColmuns> = {
  title: "SortColmuns",
  component: SortColmuns,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SortColmuns>;

export const Primary: Story = {
  args: {
    text: "F率昇順"
  }
};

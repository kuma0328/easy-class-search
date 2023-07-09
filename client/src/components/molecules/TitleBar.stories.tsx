import type { Meta, StoryObj } from "@storybook/react";
import { TitleBar } from "./TitleBar";

const meta: Meta<typeof TitleBar> = {
  title: "TitleBar",
  component: TitleBar,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TitleBar>;

export const Primary: Story = {};

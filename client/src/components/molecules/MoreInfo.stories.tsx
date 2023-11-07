import type { Meta, StoryObj } from "@storybook/react";
import { MoreInfo } from "./MoreInfo";

const meta: Meta<typeof MoreInfo> = {
  title: "MoreInfo",
  component: MoreInfo,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof MoreInfo>;

export const Primary: Story = {};

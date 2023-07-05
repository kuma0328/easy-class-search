import type { Meta, StoryObj } from "@storybook/react";
import { TimeCheckBox } from "./TimeCheckBox";

const meta: Meta<typeof TimeCheckBox> = {
  title: "TimeCheckBox",
  component: TimeCheckBox,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TimeCheckBox>;

export const Primary: Story = {
  args: {
    text: "1限"
  }
};

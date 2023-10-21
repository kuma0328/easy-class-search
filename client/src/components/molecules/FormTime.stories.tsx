import type { Meta, StoryObj } from "@storybook/react";
import { FormTime } from "./FormTime";

const meta: Meta<typeof FormTime> = {
  title: "FormTime",
  component: FormTime,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FormTime>;

export const Primary: Story = {
  args: {
    selectedTimes: [],
  },
};

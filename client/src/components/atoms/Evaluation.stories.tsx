import type { Meta, StoryObj } from "@storybook/react";
import { Evaluation } from "./Evaluation";

const meta: Meta<typeof Evaluation> = {
  title: "Evaluation",
  component: Evaluation,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Evaluation>;

export const Primary: Story = {
  args: {
    text: "テ",
    description: "テストの評価です。",
    rate: 50,
  },
};

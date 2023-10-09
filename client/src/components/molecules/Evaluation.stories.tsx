import type { Meta, StoryObj } from "@storybook/react";
import { Evaluation } from "./Evaluation";
import TEvaluation from "src/types/Evaluation";

const meta: Meta<typeof Evaluation> = {
  title: "Evaluation",
  component: Evaluation,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Evaluation>;

const evaluation: TEvaluation = {
  text: "出席",
  percent: 80,
};

export const Primary: Story = {
  args: {
    evaluation: evaluation,
  },
};

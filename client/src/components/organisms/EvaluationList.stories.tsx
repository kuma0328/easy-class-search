import type { Meta, StoryObj } from "@storybook/react";
import { EvaluationList } from "./EvaluationList";
import TEvaluation from "src/types/Evaluation";

const meta: Meta<typeof EvaluationList> = {
  title: "EvaluationList",
  component: EvaluationList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof EvaluationList>;

const evaluationList: TEvaluation[] = [
  {
    text: "出席",
    percent: 50,
  },
  {
    text: "インターンシップ",
    percent: 30,
  },
  {
    text: "レポート",
    percent: 20,
  },
];
export const Primary: Story = {
  args: {
    evaluationList: evaluationList,
  },
};

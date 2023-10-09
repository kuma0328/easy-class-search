import type { Meta, StoryObj } from "@storybook/react";
import { Grades } from "./Grades";

const meta: Meta<typeof Grades> = {
  title: "Grades",
  component: Grades,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Grades>;

export const Primary: Story = {
  args: {
    people: 100,
    rate_a: 0.5,
    rate_b: 1.0,
    rate_c: 2.0,
    rate_d: 5.0,
    rate_f: 6.0,
    rate_average: 1.0,
  },
};

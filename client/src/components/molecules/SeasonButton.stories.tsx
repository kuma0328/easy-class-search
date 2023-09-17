import type { Meta, StoryObj } from "@storybook/react";
import { SeasonButton } from "./SeasonButton";

const meta: Meta<typeof SeasonButton> = {
  title: "SeasonButton",
  component: SeasonButton,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof SeasonButton>;

export const Primary: Story = {};

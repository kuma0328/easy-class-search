import type { Meta, StoryObj } from "@storybook/react";
import { LocationButton } from "./LocationButton";

const meta: Meta<typeof LocationButton> = {
  title: "LocationButton",
  component: LocationButton,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof LocationButton>;

export const Primary: Story = {};

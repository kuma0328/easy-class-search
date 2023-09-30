import type { Meta, StoryObj } from "@storybook/react";
import { TabSwitcher } from "./TabSwitcher";

const meta: Meta<typeof TabSwitcher> = {
  title: "TabSwitcher",
  component: TabSwitcher,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof TabSwitcher>;

export const Primary: Story = {};

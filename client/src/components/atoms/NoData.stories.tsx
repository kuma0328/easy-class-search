import type { Meta, StoryObj } from "@storybook/react";
import { NoData } from "./NoData";

const meta: Meta<typeof NoData> = {
  title: "NoData",
  component: NoData,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof NoData>;

export const Primary: Story = {};

import type { Meta, StoryObj } from "@storybook/react";
import { FilterByInput } from "./FilterByInput";

const meta: Meta<typeof FilterByInput> = {
  title: "FilterByInput",
  component: FilterByInput,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterByInput>;

export const Primary: Story = {
  args: {
    id: "コード",
  },
};

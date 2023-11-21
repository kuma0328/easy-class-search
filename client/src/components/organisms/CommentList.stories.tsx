import type { Meta, StoryObj } from "@storybook/react";
import { CommentList } from "./CommentList";

const meta: Meta<typeof CommentList> = {
  title: "CommentList",
  component: CommentList,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof CommentList>;

export const Primary: Story = {};

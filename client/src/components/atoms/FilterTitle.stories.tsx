import React, { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { FilterTitle } from "./FilterTitle";

const meta: Meta<typeof FilterTitle> = {
  title: "FilterTitle",
  component: FilterTitle,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof FilterTitle>;

let isOpen = false;
const onClickOpen = () => {
  isOpen = !isOpen;
};

export const Primary: Story = {
  args: {
    title: "学期",
    isOpen: false,
    onClickOpen: onClickOpen,
    selectName: "指定なし",
  },
};

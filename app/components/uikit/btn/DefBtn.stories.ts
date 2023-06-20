import type { Meta, StoryObj } from "@storybook/react";
import DefButton from "./DefBtn";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof DefButton> = {
    title: "DefButton",
    component: DefButton,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof DefButton>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const BtnWithBg: Story = {
    args: {
        children: "search",
    },
};
export const BtnError: Story = {
    args: {
        variant: "error",
        children: "ok",
    },
};
export const BtnSuccess: Story = {
    args: {
        children: "success",
        variant: "success",
    },
};

export const BtnDisabled: Story = {
    args: {
        children: "ok",
        disabled: true,
    },
};

import type { Meta, StoryObj } from "@storybook/react";
import CustomInput from "./CustomInput";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CustomInput> = {
    title: "CustomInput",
    component: CustomInput,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof CustomInput>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Input: Story = {
    args: {},
};

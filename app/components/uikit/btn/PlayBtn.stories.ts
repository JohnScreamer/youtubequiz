import type { Meta, StoryObj } from "@storybook/react";
import PlayBtn from "./PlayBtn";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof PlayBtn> = {
    title: "PlayBtn",
    component: PlayBtn,
    tags: ["autodocs"],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof PlayBtn>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const PlayButton: Story = {
    args: {},
};

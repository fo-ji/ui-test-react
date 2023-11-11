import { within } from "@testing-library/react";
import Form from "./Form";
import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";
import { userEvent } from "@storybook/testing-library";

// MEMO: 現状、mockはできない？

const meta: Meta<typeof Form> = {
  title: "Form",
  component: Form,
};

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};

export const Testing: Story = {
  play: async ({ canvasElement }) => {
    // testing-lib の screen のようなもの
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    expect(input).toHaveTextContent("");

    await userEvent.type(input, "play function");
    expect(canvas.getByDisplayValue("play function")).toBeInTheDocument();
  },
};

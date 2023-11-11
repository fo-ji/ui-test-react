import Button from './Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    label: {
      options: ['PrimaryButton', 'NormalButton'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: 'PrimaryButton',
    primary: true,
  },
};

export const Normal: Story = {
  args: {
    label: 'NormalButton',
    primary: false,
  },
};

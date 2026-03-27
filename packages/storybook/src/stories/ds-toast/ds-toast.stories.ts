import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Toast',
  component: 'ds-toast',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['info', 'success', 'warning', 'danger'] },
    dismissible: { control: 'boolean' },
    duration: { control: 'number' },
  },
  args: { variant: 'info', dismissible: true, duration: 0 },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-toast variant=${args.variant} ?dismissible=${args.dismissible} duration=${args.duration}>
      This is a toast notification message.
    </ds-toast>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <ds-toast variant="info" duration="0">Info: New update available.</ds-toast>
      <ds-toast variant="success" duration="0">Success: File uploaded.</ds-toast>
      <ds-toast variant="warning" duration="0">Warning: Low disk space.</ds-toast>
      <ds-toast variant="danger" duration="0">Error: Connection lost.</ds-toast>
    </div>
  `,
};

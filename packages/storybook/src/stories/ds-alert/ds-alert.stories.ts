import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Alert',
  component: 'ds-alert',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['info', 'success', 'warning', 'danger'] },
    dismissible: { control: 'boolean' },
  },
  args: { variant: 'info', dismissible: false },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-alert variant=${args.variant} ?dismissible=${args.dismissible}>
      This is an informational alert message.
    </ds-alert>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <ds-alert variant="info">Info: Your account has been updated.</ds-alert>
      <ds-alert variant="success">Success: Changes saved successfully.</ds-alert>
      <ds-alert variant="warning">Warning: Your session will expire soon.</ds-alert>
      <ds-alert variant="danger">Error: Failed to process your request.</ds-alert>
    </div>
  `,
};

export const Dismissible: Story = {
  render: () => html`
    <ds-alert variant="success" dismissible>
      This alert can be dismissed by clicking the close button.
    </ds-alert>
  `,
};

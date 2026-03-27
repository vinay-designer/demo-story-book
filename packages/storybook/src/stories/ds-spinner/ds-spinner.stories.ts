import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Spinner',
  component: 'ds-spinner',
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    label: { control: 'text' },
  },
  args: { size: 'md', label: 'Loading' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<ds-spinner size=${args.size} label=${args.label}></ds-spinner>`,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center;">
      <ds-spinner size="sm"></ds-spinner>
      <ds-spinner size="md"></ds-spinner>
      <ds-spinner size="lg"></ds-spinner>
    </div>
  `,
};

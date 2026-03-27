import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Progress',
  component: 'ds-progress',
  tags: ['autodocs'],
  argTypes: {
    value: { control: { type: 'range', min: 0, max: 100, step: 1 } },
    variant: { control: { type: 'select' }, options: ['primary', 'success', 'warning', 'danger'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    showValue: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { value: 60, variant: 'primary', size: 'md', showValue: false, label: '' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-progress value=${args.value} variant=${args.variant} size=${args.size} ?show-value=${args.showValue} label=${args.label}></ds-progress>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      <ds-progress value="75" variant="primary" show-value label="Upload"></ds-progress>
      <ds-progress value="100" variant="success" show-value label="Complete"></ds-progress>
      <ds-progress value="45" variant="warning" show-value label="Storage"></ds-progress>
      <ds-progress value="90" variant="danger" show-value label="Memory"></ds-progress>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
      <ds-progress value="60" size="sm"></ds-progress>
      <ds-progress value="60" size="md"></ds-progress>
      <ds-progress value="60" size="lg"></ds-progress>
    </div>
  `,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Badge',
  component: 'ds-badge',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'primary', 'success', 'warning', 'danger', 'info'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    pill: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: 'neutral',
    size: 'md',
    pill: false,
    label: 'Badge',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-badge variant=${args.variant} size=${args.size} ?pill=${args.pill}>
      ${args.label}
    </ds-badge>
  `,
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display: flex; gap: 8px; align-items: center; flex-wrap: wrap;">
      <ds-badge variant="neutral">Neutral</ds-badge>
      <ds-badge variant="primary">Primary</ds-badge>
      <ds-badge variant="success">Success</ds-badge>
      <ds-badge variant="warning">Warning</ds-badge>
      <ds-badge variant="danger">Danger</ds-badge>
      <ds-badge variant="info">Info</ds-badge>
    </div>
  `,
};

export const Pills: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; align-items: center;">
      <ds-badge pill variant="primary">New</ds-badge>
      <ds-badge pill variant="success">Active</ds-badge>
      <ds-badge pill variant="danger">3</ds-badge>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; align-items: center;">
      <ds-badge size="sm">Small</ds-badge>
      <ds-badge size="md">Medium</ds-badge>
      <ds-badge size="lg">Large</ds-badge>
    </div>
  `,
};

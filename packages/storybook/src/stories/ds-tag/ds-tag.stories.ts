import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Tag',
  component: 'ds-tag',
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
    removable: { control: 'boolean' },
    disabled: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: {
    variant: 'neutral',
    size: 'md',
    removable: false,
    disabled: false,
    label: 'Tag',
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-tag
      variant=${args.variant}
      size=${args.size}
      ?removable=${args.removable}
      ?disabled=${args.disabled}
    >
      ${args.label}
    </ds-tag>
  `,
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <ds-tag variant="neutral">Neutral</ds-tag>
      <ds-tag variant="primary">Primary</ds-tag>
      <ds-tag variant="success">Success</ds-tag>
      <ds-tag variant="warning">Warning</ds-tag>
      <ds-tag variant="danger">Danger</ds-tag>
      <ds-tag variant="info">Info</ds-tag>
    </div>
  `,
};

export const Removable: Story = {
  render: () => html`
    <div style="display: flex; gap: 8px; flex-wrap: wrap;">
      <ds-tag removable variant="primary">React</ds-tag>
      <ds-tag removable variant="success">Vue</ds-tag>
      <ds-tag removable variant="info">Angular</ds-tag>
      <ds-tag removable variant="warning">Svelte</ds-tag>
    </div>
  `,
};

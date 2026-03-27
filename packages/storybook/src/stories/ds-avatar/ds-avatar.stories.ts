import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Avatar',
  component: 'ds-avatar',
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['xs', 'sm', 'md', 'lg', 'xl'] },
    initials: { control: 'text' },
    status: { control: { type: 'select' }, options: [undefined, 'online', 'offline', 'busy', 'away'] },
  },
  args: { size: 'md', initials: 'JD' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<ds-avatar size=${args.size} initials=${args.initials} status=${args.status || ''}></ds-avatar>`,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <ds-avatar size="xs" initials="XS"></ds-avatar>
      <ds-avatar size="sm" initials="SM"></ds-avatar>
      <ds-avatar size="md" initials="MD"></ds-avatar>
      <ds-avatar size="lg" initials="LG"></ds-avatar>
      <ds-avatar size="xl" initials="XL"></ds-avatar>
    </div>
  `,
};

export const WithStatus: Story = {
  render: () => html`
    <div style="display: flex; gap: 12px; align-items: center;">
      <ds-avatar initials="ON" status="online"></ds-avatar>
      <ds-avatar initials="OF" status="offline"></ds-avatar>
      <ds-avatar initials="BS" status="busy"></ds-avatar>
      <ds-avatar initials="AW" status="away"></ds-avatar>
    </div>
  `,
};

export const Fallback: Story = {
  render: () => html`<ds-avatar size="lg"></ds-avatar>`,
};

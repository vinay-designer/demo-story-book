import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Stat Card',
  component: 'ds-stat-card',
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    value: { control: 'text' },
    change: { control: 'text' },
    trend: { control: { type: 'select' }, options: ['up', 'down', 'neutral'] },
    description: { control: 'text' },
  },
  args: { label: 'Revenue', value: '$48,200', change: '+12.5%', trend: 'up', description: 'vs last month' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <div style="max-width: 280px;">
      <ds-stat-card label=${args.label} value=${args.value} change=${args.change} trend=${args.trend} description=${args.description}></ds-stat-card>
    </div>
  `,
};

export const DashboardGrid: Story = {
  name: 'Dashboard Stats',
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 16px; max-width: 1040px;">
      <ds-stat-card label="Total Revenue" value="$48,200" change="+12.5%" trend="up" description="vs last month"></ds-stat-card>
      <ds-stat-card label="Active Listings" value="1,247" change="+3.2%" trend="up" description="8 new today"></ds-stat-card>
      <ds-stat-card label="Bookings" value="328" change="-2.4%" trend="down" description="vs last week"></ds-stat-card>
      <ds-stat-card label="Avg. Rating" value="4.87" change="0%" trend="neutral" description="across all properties"></ds-stat-card>
    </div>
  `,
};

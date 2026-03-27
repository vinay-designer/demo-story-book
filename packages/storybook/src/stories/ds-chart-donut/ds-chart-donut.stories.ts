import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Charts/Donut Chart',
  component: 'ds-chart-donut',
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'number' } },
    thickness: { control: { type: 'number' } },
    showCenter: { control: 'boolean' },
  },
  args: { size: 220, thickness: 30, showCenter: true },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const el = document.createElement('ds-chart-donut');
    (el as any).data = [
      { label: 'Direct', value: 42, color: '#FF385C' },
      { label: 'Organic', value: 28, color: '#10b981' },
      { label: 'Referral', value: 18, color: '#8b5cf6' },
      { label: 'Social', value: 12, color: '#f59e0b' },
    ];
    el.setAttribute('size', String(args.size));
    el.setAttribute('thickness', String(args.thickness));
    if (args.showCenter) el.setAttribute('show-center', '');
    el.setAttribute('center-label', 'Total');
    el.setAttribute('center-value', '100%');
    el.setAttribute('animated', '');
    return el;
  },
};

export const Revenue: Story = {
  name: 'Revenue Breakdown',
  render: () => {
    const el = document.createElement('ds-chart-donut');
    (el as any).data = [
      { label: 'Bookings', value: 68500, color: '#FF385C' },
      { label: 'Experiences', value: 24200, color: '#8b5cf6' },
      { label: 'Services', value: 12800, color: '#10b981' },
    ];
    el.setAttribute('size', '240');
    el.setAttribute('thickness', '32');
    el.setAttribute('show-center', '');
    el.setAttribute('center-value', '$105K');
    el.setAttribute('center-label', 'Revenue');
    el.setAttribute('animated', '');
    return el;
  },
};

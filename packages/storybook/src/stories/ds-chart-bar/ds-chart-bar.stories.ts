import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Charts/Bar Chart',
  component: 'ds-chart-bar',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: { type: 'select' }, options: ['vertical', 'horizontal'] },
    height: { control: { type: 'number' } },
    showValues: { control: 'boolean' },
    animated: { control: 'boolean' },
  },
  args: { orientation: 'vertical', height: 240, showValues: true, animated: true },
};
export default meta;
type Story = StoryObj;

const revenueData = [
  { label: 'Jan', value: 4200 },
  { label: 'Feb', value: 5800 },
  { label: 'Mar', value: 4900 },
  { label: 'Apr', value: 7200 },
  { label: 'May', value: 6100 },
  { label: 'Jun', value: 8400 },
  { label: 'Jul', value: 7600 },
];

export const Default: Story = {
  render: (args) => {
    const el = document.createElement('ds-chart-bar');
    (el as any).data = revenueData;
    el.setAttribute('orientation', args.orientation);
    el.setAttribute('height', String(args.height));
    if (args.showValues) el.setAttribute('show-values', '');
    if (args.animated) el.setAttribute('animated', '');
    return el;
  },
};

export const Horizontal: Story = {
  render: () => {
    const el = document.createElement('ds-chart-bar');
    (el as any).data = [
      { label: 'United States', value: 42000, color: '#FF385C' },
      { label: 'United Kingdom', value: 28000, color: '#8b5cf6' },
      { label: 'France', value: 21000, color: '#10b981' },
      { label: 'Japan', value: 18000, color: '#f59e0b' },
      { label: 'Australia', value: 15000, color: '#4a4a7a' },
    ];
    el.setAttribute('orientation', 'horizontal');
    el.setAttribute('height', '280');
    el.setAttribute('show-values', '');
    el.setAttribute('animated', '');
    return el;
  },
};

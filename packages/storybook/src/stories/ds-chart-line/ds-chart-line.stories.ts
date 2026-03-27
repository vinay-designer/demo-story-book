import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Charts/Line Chart',
  component: 'ds-chart-line',
  tags: ['autodocs'],
  argTypes: {
    height: { control: { type: 'number' } },
    showArea: { control: 'boolean' },
    showDots: { control: 'boolean' },
    showGrid: { control: 'boolean' },
    animated: { control: 'boolean' },
  },
  args: { height: 260, showArea: true, showDots: true, showGrid: true, animated: true },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const el = document.createElement('ds-chart-line');
    (el as any).series = [
      {
        name: 'Revenue',
        color: '#FF385C',
        data: [
          { label: 'Jan', value: 4200 },
          { label: 'Feb', value: 5800 },
          { label: 'Mar', value: 4900 },
          { label: 'Apr', value: 7200 },
          { label: 'May', value: 6100 },
          { label: 'Jun', value: 8400 },
        ],
      },
    ];
    el.setAttribute('height', String(args.height));
    if (args.showArea) el.setAttribute('show-area', '');
    if (args.showDots) el.setAttribute('show-dots', '');
    if (args.showGrid) el.setAttribute('show-grid', '');
    if (args.animated) el.setAttribute('animated', '');
    return el;
  },
};

export const MultiSeries: Story = {
  name: 'Multi-Series',
  render: () => {
    const el = document.createElement('ds-chart-line');
    (el as any).series = [
      {
        name: 'This Year',
        color: '#FF385C',
        data: [
          { label: 'Jan', value: 4200 },
          { label: 'Feb', value: 5800 },
          { label: 'Mar', value: 4900 },
          { label: 'Apr', value: 7200 },
          { label: 'May', value: 6100 },
          { label: 'Jun', value: 8400 },
        ],
      },
      {
        name: 'Last Year',
        color: '#CBCBCB',
        data: [
          { label: 'Jan', value: 3100 },
          { label: 'Feb', value: 4200 },
          { label: 'Mar', value: 3800 },
          { label: 'Apr', value: 5100 },
          { label: 'May', value: 4600 },
          { label: 'Jun', value: 6200 },
        ],
      },
    ];
    el.setAttribute('height', '280');
    el.setAttribute('show-area', '');
    el.setAttribute('show-dots', '');
    el.setAttribute('show-grid', '');
    el.setAttribute('animated', '');
    return el;
  },
};

import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Table',
  component: 'ds-table',
  tags: ['autodocs'],
  argTypes: {
    striped: { control: 'boolean' },
    hoverable: { control: 'boolean' },
    compact: { control: 'boolean' },
  },
  args: { striped: false, hoverable: true, compact: false },
};

export default meta;
type Story = StoryObj;

const columns = [
  { key: 'guest', label: 'Guest', sortable: true },
  { key: 'property', label: 'Property', sortable: true },
  { key: 'checkin', label: 'Check-in' },
  { key: 'amount', label: 'Amount', sortable: true, align: 'right' as const },
  { key: 'status', label: 'Status', sortable: true },
];

const data = [
  { guest: 'Sarah Chen', property: 'Oceanfront Villa', checkin: 'Jan 15, 2025', amount: '$1,250', status: 'Confirmed' },
  { guest: 'James Wilson', property: 'Mountain Retreat', checkin: 'Jan 18, 2025', amount: '$890', status: 'Pending' },
  { guest: 'Priya Patel', property: 'City Penthouse', checkin: 'Jan 20, 2025', amount: '$2,100', status: 'Confirmed' },
  { guest: 'Marcus Brown', property: 'Lakeside Cabin', checkin: 'Jan 22, 2025', amount: '$650', status: 'Cancelled' },
  { guest: 'Emma Davis', property: 'Desert Oasis', checkin: 'Jan 25, 2025', amount: '$1,800', status: 'Confirmed' },
  { guest: 'Liam O\'Brien', property: 'Coastal Cottage', checkin: 'Feb 1, 2025', amount: '$720', status: 'Pending' },
];

export const Default: Story = {
  render: (args) => {
    const el = document.createElement('ds-table');
    (el as any).columns = columns;
    (el as any).data = data;
    if (args.striped) el.setAttribute('striped', '');
    if (args.hoverable) el.setAttribute('hoverable', '');
    if (args.compact) el.setAttribute('compact', '');
    return el;
  },
};

export const Striped: Story = {
  render: () => {
    const el = document.createElement('ds-table');
    (el as any).columns = columns;
    (el as any).data = data;
    el.setAttribute('striped', '');
    el.setAttribute('hoverable', '');
    return el;
  },
};

import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Timeline',
  component: 'ds-timeline',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const el = document.createElement('ds-timeline');
    (el as any).items = [
      { title: 'Booking confirmed', description: 'Your reservation at Jungle Treehouse Villa has been confirmed.', time: '2 hours ago', variant: 'success' },
      { title: 'Payment processed', description: '$925 charged to Visa ending in 4242.', time: '2 hours ago', variant: 'info' },
      { title: 'Host messaged you', description: 'Hi! Looking forward to hosting you. Let me know if you need directions.', time: '1 hour ago', variant: 'default' },
      { title: 'Check-in details shared', description: 'Door code and WiFi password have been sent to your email.', time: '30 min ago', variant: 'default' },
      { title: 'Trip starts tomorrow', description: 'Don\'t forget to review the house rules before arrival.', time: 'Just now', variant: 'warning' },
    ];
    el.style.maxWidth = '480px';
    return el;
  },
};

export const ActivityLog: Story = {
  name: 'Activity Log',
  render: () => {
    const el = document.createElement('ds-timeline');
    (el as any).items = [
      { title: 'Listing published', description: 'Oceanfront Villa is now live on the platform.', time: 'Mar 15', variant: 'success' },
      { title: 'Price updated', description: 'Nightly rate changed from $180 to $210.', time: 'Mar 12', variant: 'info' },
      { title: 'Review received', description: '5-star review from Sarah: "Amazing stay!"', time: 'Mar 10', variant: 'success' },
      { title: 'Booking cancelled', description: 'Guest Marcus Brown cancelled reservation.', time: 'Mar 8', variant: 'danger' },
      { title: 'Photos updated', description: '12 new photos uploaded to the listing.', time: 'Mar 5', variant: 'default' },
    ];
    el.style.maxWidth = '480px';
    return el;
  },
};

import type { Meta, StoryObj } from '@storybook/web-components';

const meta: Meta = {
  title: 'Components/Stepper',
  component: 'ds-stepper',
  tags: ['autodocs'],
  argTypes: {
    activeStep: { control: { type: 'number', min: 0, max: 3 } },
    orientation: { control: { type: 'select' }, options: ['horizontal', 'vertical'] },
  },
  args: { activeStep: 1, orientation: 'horizontal' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => {
    const el = document.createElement('ds-stepper');
    (el as any).steps = [
      { label: 'Details', description: 'Property info' },
      { label: 'Photos', description: 'Upload images' },
      { label: 'Pricing', description: 'Set your rate' },
      { label: 'Publish', description: 'Go live' },
    ];
    el.setAttribute('active-step', String(args.activeStep));
    el.setAttribute('orientation', args.orientation);
    return el;
  },
};

export const BookingFlow: Story = {
  name: 'Booking Flow',
  render: () => {
    const el = document.createElement('ds-stepper');
    (el as any).steps = [
      { label: 'Select dates', description: 'Check-in & Check-out' },
      { label: 'Guest details', description: 'Name & contact' },
      { label: 'Payment', description: 'Card info' },
      { label: 'Confirmation', description: 'Review & book' },
    ];
    el.setAttribute('active-step', '2');
    el.setAttribute('orientation', 'horizontal');
    return el;
  },
};

export const Vertical: Story = {
  render: () => {
    const el = document.createElement('ds-stepper');
    (el as any).steps = [
      { label: 'Account created', description: 'Sign up completed' },
      { label: 'Verify identity', description: 'Upload your ID' },
      { label: 'Add payment', description: 'Link a card' },
      { label: 'Start hosting', description: 'List your first property' },
    ];
    el.setAttribute('active-step', '2');
    el.setAttribute('orientation', 'vertical');
    return el;
  },
};

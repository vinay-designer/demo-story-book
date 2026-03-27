import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Button',
  component: 'ds-button',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'outline', 'ghost', 'danger'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    loading: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    label: { control: 'text' },
  },
  args: { variant: 'primary', size: 'md', disabled: false, loading: false, fullWidth: false, label: 'Book Now' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-button variant=${args.variant} size=${args.size} ?disabled=${args.disabled} ?loading=${args.loading} ?full-width=${args.fullWidth}>
      ${args.label}
    </ds-button>
  `,
};

export const AllVariants: Story = {
  name: 'All Variants',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; padding: 20px;">
      <ds-button variant="primary" size="lg">Reserve</ds-button>
      <ds-button variant="secondary" size="lg">Sign Up</ds-button>
      <ds-button variant="outline" size="lg">Learn More</ds-button>
      <ds-button variant="ghost" size="lg">Skip</ds-button>
      <ds-button variant="danger" size="lg">Cancel Trip</ds-button>
    </div>
  `,
};

export const Sizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center; padding: 20px;">
      <ds-button size="sm" variant="primary">Small</ds-button>
      <ds-button size="md" variant="primary">Medium</ds-button>
      <ds-button size="lg" variant="primary">Large</ds-button>
    </div>
  `,
};

export const LoadingStates: Story = {
  name: 'Loading States',
  render: () => html`
    <div style="display: flex; gap: 16px; align-items: center; padding: 20px;">
      <ds-button variant="primary" loading>Processing...</ds-button>
      <ds-button variant="secondary" loading>Saving</ds-button>
      <ds-button variant="outline" loading>Loading</ds-button>
    </div>
  `,
};

export const BookingCard: Story = {
  name: 'Booking Card Example',
  render: () => html`
    <div style="max-width: 380px; border-radius: 24px; overflow: hidden; box-shadow: 0 6px 24px rgba(0,0,0,0.08); font-family: 'Plus Jakarta Sans', sans-serif;">
      <div style="height: 240px; background: linear-gradient(135deg, #FF385C 0%, #E31C5F 50%, #BD1E59 100%); display: flex; align-items: flex-end; padding: 24px;">
        <div>
          <div style="color: rgba(255,255,255,0.8); font-size: 14px; font-weight: 500;">Entire home in Bali</div>
          <div style="color: white; font-size: 24px; font-weight: 700; letter-spacing: -0.03em; margin-top: 4px;">Jungle Treehouse Villa</div>
        </div>
      </div>
      <div style="padding: 24px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px;">
          <div>
            <span style="font-size: 24px; font-weight: 800; color: var(--ds-color-fg-primary); letter-spacing: -0.03em;">$185</span>
            <span style="font-size: 14px; color: var(--ds-color-fg-tertiary); font-weight: 500;"> / night</span>
          </div>
          <div style="display: flex; align-items: center; gap: 4px;">
            <span style="color: #FF385C;">★</span>
            <span style="font-size: 14px; font-weight: 600; color: var(--ds-color-fg-primary);">4.97</span>
            <span style="font-size: 14px; color: var(--ds-color-fg-tertiary);">(128)</span>
          </div>
        </div>
        <div style="display: flex; gap: 8px; margin-bottom: 20px;">
          <ds-badge variant="primary" pill>Superhost</ds-badge>
          <ds-badge variant="neutral" pill>Self check-in</ds-badge>
          <ds-badge variant="success" pill>Free cancellation</ds-badge>
        </div>
        <div style="display: flex; gap: 12px;">
          <ds-button variant="primary" size="lg" full-width>Reserve</ds-button>
          <ds-button variant="outline" size="lg">
            <span slot="icon-start">♡</span>
          </ds-button>
        </div>
      </div>
    </div>
  `,
};

export const RideConfirmation: Story = {
  name: 'Ride Confirmation',
  render: () => html`
    <div style="max-width: 400px; background: #141414; border-radius: 24px; padding: 32px; font-family: 'Plus Jakarta Sans', sans-serif; color: white;">
      <div style="font-size: 14px; color: #757575; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px;">Your ride</div>
      <div style="font-size: 28px; font-weight: 800; letter-spacing: -0.03em; margin-bottom: 24px;">UberX arriving in 3 min</div>
      <div style="display: flex; align-items: center; gap: 16px; padding: 16px 0; border-top: 1px solid #333; border-bottom: 1px solid #333; margin-bottom: 24px;">
        <ds-avatar initials="MK" size="lg"></ds-avatar>
        <div style="flex: 1;">
          <div style="font-weight: 600; font-size: 16px;">Michael K.</div>
          <div style="color: #757575; font-size: 14px;">Toyota Camry · White · ABC 1234</div>
        </div>
        <div style="display: flex; align-items: center; gap: 4px;">
          <span style="color: #fbbf24;">★</span>
          <span style="font-weight: 600;">4.92</span>
        </div>
      </div>
      <div style="display: flex; gap: 12px;">
        <ds-button variant="primary" size="lg" full-width>Contact Driver</ds-button>
        <ds-button variant="outline" size="lg" style="--ds-color-border-default: #333; --ds-color-fg-primary: white;">
          <span slot="icon-start">⋯</span>
        </ds-button>
      </div>
    </div>
  `,
};

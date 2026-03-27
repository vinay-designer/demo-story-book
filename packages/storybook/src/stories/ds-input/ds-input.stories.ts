import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Input',
  component: 'ds-input',
  tags: ['autodocs'],
  argTypes: {
    type: { control: { type: 'select' }, options: ['text', 'password', 'email', 'number'] },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    required: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    helperText: { control: 'text' },
    errorMessage: { control: 'text' },
  },
  args: { type: 'text', size: 'md', disabled: false, invalid: false, required: false, label: 'Full Name', placeholder: 'Enter your name', helperText: '', errorMessage: '' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <div style="max-width: 360px;">
      <ds-input type=${args.type} size=${args.size} ?disabled=${args.disabled} ?invalid=${args.invalid} ?required=${args.required} label=${args.label} placeholder=${args.placeholder} helper-text=${args.helperText} error-message=${args.errorMessage}></ds-input>
    </div>
  `,
};

export const LoginForm: Story = {
  name: 'Login Form',
  render: () => html`
    <div style="max-width: 400px; padding: 40px; border-radius: 24px; box-shadow: 0 6px 32px rgba(0,0,0,0.08); font-family: 'Plus Jakarta Sans', sans-serif;">
      <div style="text-align: center; margin-bottom: 32px;">
        <div style="font-size: 28px; font-weight: 800; color: var(--ds-color-fg-primary); letter-spacing: -0.03em;">Welcome back</div>
        <div style="color: var(--ds-color-fg-tertiary); font-size: 15px; margin-top: 8px;">Sign in to continue your journey</div>
      </div>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ds-input type="email" label="Email" placeholder="you@example.com" size="lg" required></ds-input>
        <ds-input type="password" label="Password" placeholder="Enter your password" size="lg" required></ds-input>
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <ds-checkbox>Remember me</ds-checkbox>
          <a href="#" style="color: var(--ds-color-fg-brand); font-size: 14px; font-weight: 600; text-decoration: none;">Forgot password?</a>
        </div>
        <ds-button variant="primary" size="lg" full-width>Sign In</ds-button>
        <ds-button variant="outline" size="lg" full-width>Continue with Google</ds-button>
      </div>
      <div style="text-align: center; margin-top: 24px; font-size: 14px; color: var(--ds-color-fg-tertiary);">
        Don't have an account? <a href="#" style="color: var(--ds-color-fg-brand); font-weight: 600; text-decoration: none;">Sign up</a>
      </div>
    </div>
  `,
};

export const SearchBar: Story = {
  name: 'Search Bar',
  render: () => html`
    <div style="max-width: 600px; padding: 12px; border-radius: 100px; box-shadow: 0 4px 24px rgba(0,0,0,0.08); border: 1.5px solid var(--ds-color-border-default); display: flex; align-items: center; gap: 0; font-family: 'Plus Jakarta Sans', sans-serif;">
      <div style="flex: 1; padding: 8px 20px; border-right: 1px solid var(--ds-color-border-default);">
        <div style="font-size: 12px; font-weight: 700; color: var(--ds-color-fg-primary);">Where</div>
        <div style="font-size: 14px; color: var(--ds-color-fg-tertiary); margin-top: 2px;">Search destinations</div>
      </div>
      <div style="flex: 0.7; padding: 8px 20px; border-right: 1px solid var(--ds-color-border-default);">
        <div style="font-size: 12px; font-weight: 700; color: var(--ds-color-fg-primary);">Check in</div>
        <div style="font-size: 14px; color: var(--ds-color-fg-tertiary); margin-top: 2px;">Add dates</div>
      </div>
      <div style="flex: 0.7; padding: 8px 20px;">
        <div style="font-size: 12px; font-weight: 700; color: var(--ds-color-fg-primary);">Guests</div>
        <div style="font-size: 14px; color: var(--ds-color-fg-tertiary); margin-top: 2px;">Add guests</div>
      </div>
      <div style="padding: 0 8px;">
        <ds-button variant="primary" size="md" style="border-radius: 50%;">Search</ds-button>
      </div>
    </div>
  `,
};

export const Validation: Story = {
  name: 'Validation States',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 360px;">
      <ds-input label="Username" placeholder="johndoe" helper-text="Must be 3-20 characters"></ds-input>
      <ds-input label="Email" type="email" invalid error-message="Please enter a valid email address" value="invalid-email" required></ds-input>
      <ds-input label="Password" type="password" placeholder="Min. 8 characters" required></ds-input>
    </div>
  `,
};

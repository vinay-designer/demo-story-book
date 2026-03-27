import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Tabs',
  component: 'ds-tabs',
  tags: ['autodocs'],
  argTypes: {
    orientation: { control: { type: 'select' }, options: ['horizontal', 'vertical'] },
  },
  args: { orientation: 'horizontal' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-tabs value="tab1" orientation=${args.orientation}>
      <ds-tab value="tab1">General</ds-tab>
      <ds-tab value="tab2">Security</ds-tab>
      <ds-tab value="tab3">Notifications</ds-tab>
      <ds-tab-panel value="tab1">
        <p>General settings content goes here.</p>
      </ds-tab-panel>
      <ds-tab-panel value="tab2">
        <p>Security settings content with password and 2FA options.</p>
      </ds-tab-panel>
      <ds-tab-panel value="tab3">
        <p>Notification preferences and email settings.</p>
      </ds-tab-panel>
    </ds-tabs>
  `,
};

export const Vertical: Story = {
  render: () => html`
    <ds-tabs value="tab1" orientation="vertical">
      <ds-tab value="tab1">Profile</ds-tab>
      <ds-tab value="tab2">Account</ds-tab>
      <ds-tab value="tab3">Billing</ds-tab>
      <ds-tab value="tab4" disabled>Admin</ds-tab>
      <ds-tab-panel value="tab1"><p>Profile information and avatar settings.</p></ds-tab-panel>
      <ds-tab-panel value="tab2"><p>Account details and connected services.</p></ds-tab-panel>
      <ds-tab-panel value="tab3"><p>Billing information and invoices.</p></ds-tab-panel>
      <ds-tab-panel value="tab4"><p>Admin panel (disabled).</p></ds-tab-panel>
    </ds-tabs>
  `,
};

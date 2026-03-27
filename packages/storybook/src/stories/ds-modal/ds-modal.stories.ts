import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Modal',
  component: 'ds-modal',
  tags: ['autodocs'],
  argTypes: {
    modalSize: { control: { type: 'select' }, options: ['sm', 'md', 'lg', 'xl'] },
  },
  args: { modalSize: 'md' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-button variant="primary" @dsClick=${() => (document.querySelector('#demo-modal') as any)?.show()}>Open Modal</ds-button>
    <ds-modal id="demo-modal" modal-size=${args.modalSize} dialog-label="Confirmation">
      <h2 slot="header" style="margin:0; font-family: 'Plus Jakarta Sans', sans-serif;">Confirm your booking</h2>
      <div style="font-family: 'Plus Jakarta Sans', sans-serif;">
        <p style="margin: 0 0 16px; color: var(--ds-color-fg-secondary); line-height: 1.6;">You're about to book <strong style="color: var(--ds-color-fg-primary);">Jungle Treehouse Villa</strong> in Bali for 5 nights.</p>
        <div style="background: var(--ds-color-bg-tertiary); border-radius: 14px; padding: 16px; display: flex; justify-content: space-between; font-size: 14px;">
          <div>
            <div style="color: var(--ds-color-fg-tertiary); font-weight: 500;">Total</div>
            <div style="font-size: 24px; font-weight: 800; color: var(--ds-color-fg-primary); letter-spacing: -0.03em; margin-top: 4px;">$925</div>
          </div>
          <div style="text-align: right;">
            <div style="color: var(--ds-color-fg-tertiary); font-weight: 500;">Dec 20 - Dec 25</div>
            <div style="font-weight: 600; color: var(--ds-color-fg-primary); margin-top: 4px;">5 nights · 2 guests</div>
          </div>
        </div>
      </div>
      <div slot="footer">
        <ds-button variant="ghost" @dsClick=${() => (document.querySelector('#demo-modal') as any)?.hide()}>Cancel</ds-button>
        <ds-button variant="primary" @dsClick=${() => (document.querySelector('#demo-modal') as any)?.hide()}>Confirm & Pay</ds-button>
      </div>
    </ds-modal>
  `,
};

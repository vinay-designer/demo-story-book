import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Card',
  component: 'ds-card',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['elevated', 'outlined', 'filled'] },
    interactive: { control: 'boolean' },
    padding: { control: { type: 'select' }, options: ['none', 'sm', 'md', 'lg'] },
  },
  args: { variant: 'elevated', interactive: false, padding: 'md' },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <div style="max-width: 380px;">
      <ds-card variant=${args.variant} ?interactive=${args.interactive} padding=${args.padding}>
        <h3 slot="header" style="margin:0;font-size:1.125rem;font-weight:700;letter-spacing:-0.02em;color:var(--ds-color-fg-primary);font-family:'Plus Jakarta Sans',sans-serif;">Card Title</h3>
        <p style="margin:0;color:var(--ds-color-fg-secondary);font-family:'Plus Jakarta Sans',sans-serif;line-height:1.6;">This card demonstrates the base component with clean typography and generous spacing.</p>
        <div slot="footer" style="display:flex;gap:10px;">
          <ds-button size="sm" variant="primary">Action</ds-button>
          <ds-button size="sm" variant="ghost">Cancel</ds-button>
        </div>
      </ds-card>
    </div>
  `,
};

export const PropertyListing: Story = {
  name: 'Property Listing',
  render: () => html`
    <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; max-width: 1000px;">
      ${['Santorini Villa', 'Tokyo Loft', 'Paris Studio'].map((name, i) => html`
        <ds-card variant="elevated" interactive padding="none">
          <div slot="media" style="height: 200px; background: ${['linear-gradient(135deg, #FF385C, #FF6B6B)', 'linear-gradient(135deg, #1A1A2E, #16213E)', 'linear-gradient(135deg, #667eea, #764ba2)'][i]}; position: relative;">
            <div style="position: absolute; top: 12px; left: 12px;">
              <ds-badge variant="${['primary', 'neutral', 'info'][i]}" pill>${['Guest favorite', 'New', 'Rare find'][i]}</ds-badge>
            </div>
            <button style="position: absolute; top: 12px; right: 12px; background: rgba(0,0,0,0.3); border: none; color: white; width: 36px; height: 36px; border-radius: 50%; cursor: pointer; font-size: 18px; backdrop-filter: blur(8px);">♡</button>
          </div>
          <div style="padding: 20px; font-family: 'Plus Jakarta Sans', sans-serif;">
            <div style="display: flex; justify-content: space-between; align-items: start;">
              <div>
                <div style="font-weight: 700; font-size: 16px; color: var(--ds-color-fg-primary); letter-spacing: -0.02em;">${name}</div>
                <div style="color: var(--ds-color-fg-tertiary); font-size: 14px; margin-top: 2px;">${['Greece', 'Japan', 'France'][i]}</div>
              </div>
              <div style="display: flex; align-items: center; gap: 4px;">
                <span style="color: #FF385C;">★</span>
                <span style="font-weight: 600; font-size: 14px;">${['4.98', '4.95', '4.92'][i]}</span>
              </div>
            </div>
            <div style="margin-top: 12px;">
              <span style="font-weight: 800; font-size: 18px; color: var(--ds-color-fg-primary);">$${['245', '120', '189'][i]}</span>
              <span style="color: var(--ds-color-fg-tertiary); font-size: 14px;"> / night</span>
            </div>
          </div>
        </ds-card>
      `)}
    </div>
  `,
};

export const PricingCards: Story = {
  name: 'Pricing Cards',
  render: () => html`
    <div style="display: flex; gap: 20px; max-width: 900px; align-items: stretch; font-family: 'Plus Jakarta Sans', sans-serif;">
      <ds-card variant="outlined" padding="lg" style="flex: 1;">
        <div slot="header" style="margin:0;">
          <div style="font-size: 14px; font-weight: 600; color: var(--ds-color-fg-tertiary); text-transform: uppercase; letter-spacing: 0.06em;">Starter</div>
          <div style="margin-top: 8px;"><span style="font-size: 36px; font-weight: 800; color: var(--ds-color-fg-primary); letter-spacing: -0.03em;">$9</span><span style="color: var(--ds-color-fg-tertiary); font-size: 14px;"> /month</span></div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px; color: var(--ds-color-fg-secondary); font-size: 14px;">
          <div>✓ 5 projects</div>
          <div>✓ 10GB storage</div>
          <div>✓ Email support</div>
          <div style="color: #CBCBCB;">✕ Custom domain</div>
        </div>
        <div slot="footer"><ds-button variant="outline" full-width>Get Started</ds-button></div>
      </ds-card>
      <ds-card variant="elevated" padding="lg" style="flex: 1; position: relative; overflow: visible;">
        <div style="position: absolute; top: -12px; left: 50%; transform: translateX(-50%);">
          <ds-badge variant="primary" pill>Most Popular</ds-badge>
        </div>
        <div slot="header" style="margin:0;">
          <div style="font-size: 14px; font-weight: 600; color: var(--ds-color-fg-brand); text-transform: uppercase; letter-spacing: 0.06em;">Pro</div>
          <div style="margin-top: 8px;"><span style="font-size: 36px; font-weight: 800; color: var(--ds-color-fg-primary); letter-spacing: -0.03em;">$29</span><span style="color: var(--ds-color-fg-tertiary); font-size: 14px;"> /month</span></div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px; color: var(--ds-color-fg-secondary); font-size: 14px;">
          <div>✓ Unlimited projects</div>
          <div>✓ 100GB storage</div>
          <div>✓ Priority support</div>
          <div>✓ Custom domain</div>
        </div>
        <div slot="footer"><ds-button variant="primary" full-width size="lg">Upgrade to Pro</ds-button></div>
      </ds-card>
      <ds-card variant="filled" padding="lg" style="flex: 1;">
        <div slot="header" style="margin:0;">
          <div style="font-size: 14px; font-weight: 600; color: var(--ds-color-fg-tertiary); text-transform: uppercase; letter-spacing: 0.06em;">Enterprise</div>
          <div style="margin-top: 8px;"><span style="font-size: 36px; font-weight: 800; color: var(--ds-color-fg-primary); letter-spacing: -0.03em;">$99</span><span style="color: var(--ds-color-fg-tertiary); font-size: 14px;"> /month</span></div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 12px; color: var(--ds-color-fg-secondary); font-size: 14px;">
          <div>✓ Everything in Pro</div>
          <div>✓ 1TB storage</div>
          <div>✓ 24/7 phone support</div>
          <div>✓ SSO & SAML</div>
        </div>
        <div slot="footer"><ds-button variant="secondary" full-width>Contact Sales</ds-button></div>
      </ds-card>
    </div>
  `,
};

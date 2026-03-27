import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Skeleton',
  component: 'ds-skeleton',
  tags: ['autodocs'],
  argTypes: {
    variant: { control: { type: 'select' }, options: ['text', 'circular', 'rectangular', 'rounded'] },
    width: { control: 'text' },
    height: { control: 'text' },
  },
  args: { variant: 'text', width: '100%', height: '' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<ds-skeleton variant=${args.variant} width=${args.width} height=${args.height}></ds-skeleton>`,
};

export const CardSkeleton: Story = {
  name: 'Loading Card',
  render: () => html`
    <div style="max-width: 340px; padding: 24px; border-radius: 24px; border: 1.5px solid var(--ds-color-border-subtle);">
      <ds-skeleton variant="rounded" height="180px"></ds-skeleton>
      <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
        <ds-skeleton variant="circular" width="44px" height="44px"></ds-skeleton>
        <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
          <ds-skeleton variant="text" width="60%"></ds-skeleton>
          <ds-skeleton variant="text" width="40%" height="12px"></ds-skeleton>
        </div>
      </div>
      <div style="margin-top: 16px; display: flex; flex-direction: column; gap: 8px;">
        <ds-skeleton variant="text"></ds-skeleton>
        <ds-skeleton variant="text" width="80%"></ds-skeleton>
      </div>
      <div style="margin-top: 20px;">
        <ds-skeleton variant="rounded" height="44px"></ds-skeleton>
      </div>
    </div>
  `,
};

export const ListSkeleton: Story = {
  name: 'Loading List',
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 20px; max-width: 400px;">
      ${[1,2,3,4].map(() => html`
        <div style="display: flex; gap: 14px; align-items: center;">
          <ds-skeleton variant="circular" width="48px" height="48px"></ds-skeleton>
          <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
            <ds-skeleton variant="text" width="70%"></ds-skeleton>
            <ds-skeleton variant="text" width="50%" height="12px"></ds-skeleton>
          </div>
          <ds-skeleton variant="rounded" width="64px" height="28px"></ds-skeleton>
        </div>
      `)}
    </div>
  `,
};

import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Tooltip',
  component: 'ds-tooltip',
  tags: ['autodocs'],
  argTypes: {
    content: { control: 'text' },
    placement: { control: { type: 'select' }, options: ['top', 'bottom', 'left', 'right'] },
    delay: { control: { type: 'number' } },
  },
  args: { content: 'Tooltip text', placement: 'top', delay: 200 },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <div style="padding: 60px; text-align: center;">
      <ds-tooltip content=${args.content} placement=${args.placement} delay=${args.delay}>
        <ds-button>Hover me</ds-button>
      </ds-tooltip>
    </div>
  `,
};

export const AllPlacements: Story = {
  render: () => html`
    <div style="display: flex; gap: 24px; padding: 80px; justify-content: center;">
      <ds-tooltip content="Top tooltip" placement="top"><ds-button variant="outline">Top</ds-button></ds-tooltip>
      <ds-tooltip content="Bottom tooltip" placement="bottom"><ds-button variant="outline">Bottom</ds-button></ds-tooltip>
      <ds-tooltip content="Left tooltip" placement="left"><ds-button variant="outline">Left</ds-button></ds-tooltip>
      <ds-tooltip content="Right tooltip" placement="right"><ds-button variant="outline">Right</ds-button></ds-tooltip>
    </div>
  `,
};

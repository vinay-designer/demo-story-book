import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Toggle',
  component: 'ds-toggle',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
  },
  args: { checked: false, disabled: false, size: 'md' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<ds-toggle ?checked=${args.checked} ?disabled=${args.disabled} size=${args.size}>Enable notifications</ds-toggle>`,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 16px;">
      <ds-toggle size="sm">Small toggle</ds-toggle>
      <ds-toggle size="md" checked>Medium toggle (on)</ds-toggle>
      <ds-toggle size="lg">Large toggle</ds-toggle>
    </div>
  `,
};

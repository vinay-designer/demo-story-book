import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Checkbox',
  component: 'ds-checkbox',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    indeterminate: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { checked: false, indeterminate: false, disabled: false },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<ds-checkbox ?checked=${args.checked} ?indeterminate=${args.indeterminate} ?disabled=${args.disabled}>Accept terms</ds-checkbox>`,
};

export const States: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 12px;">
      <ds-checkbox>Unchecked</ds-checkbox>
      <ds-checkbox checked>Checked</ds-checkbox>
      <ds-checkbox indeterminate>Indeterminate</ds-checkbox>
      <ds-checkbox disabled>Disabled</ds-checkbox>
      <ds-checkbox checked disabled>Checked & Disabled</ds-checkbox>
    </div>
  `,
};

export const Group: Story = {
  render: () => html`
    <ds-checkbox-group label="Favorite frameworks">
      <ds-checkbox value="react">React</ds-checkbox>
      <ds-checkbox value="vue">Vue</ds-checkbox>
      <ds-checkbox value="angular" checked>Angular</ds-checkbox>
      <ds-checkbox value="svelte">Svelte</ds-checkbox>
    </ds-checkbox-group>
  `,
};

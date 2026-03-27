import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Radio',
  component: 'ds-radio',
  tags: ['autodocs'],
  argTypes: {
    checked: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
  args: { checked: false, disabled: false },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<ds-radio ?checked=${args.checked} ?disabled=${args.disabled}>Option</ds-radio>`,
};

export const Group: Story = {
  render: () => html`
    <ds-radio-group label="Select a plan" value="pro">
      <ds-radio value="free" name="plan">Free</ds-radio>
      <ds-radio value="pro" name="plan" checked>Pro</ds-radio>
      <ds-radio value="enterprise" name="plan">Enterprise</ds-radio>
    </ds-radio-group>
  `,
};

export const HorizontalGroup: Story = {
  render: () => html`
    <ds-radio-group label="Size" orientation="horizontal">
      <ds-radio value="s" name="size">S</ds-radio>
      <ds-radio value="m" name="size" checked>M</ds-radio>
      <ds-radio value="l" name="size">L</ds-radio>
      <ds-radio value="xl" name="size">XL</ds-radio>
    </ds-radio-group>
  `,
};

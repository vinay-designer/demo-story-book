import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Dropdown',
  component: 'ds-dropdown',
  tags: ['autodocs'],
  argTypes: {
    placement: { control: { type: 'select' }, options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'] },
  },
  args: { placement: 'bottom-start' },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <div style="padding: 100px;">
      <ds-dropdown placement=${args.placement}>
        <ds-button slot="trigger" variant="outline">Options &#9662;</ds-button>
        <ds-dropdown-item>Edit</ds-dropdown-item>
        <ds-dropdown-item>Duplicate</ds-dropdown-item>
        <ds-dropdown-item>Archive</ds-dropdown-item>
        <ds-dropdown-item disabled>Move</ds-dropdown-item>
        <ds-dropdown-item danger>Delete</ds-dropdown-item>
      </ds-dropdown>
    </div>
  `,
};

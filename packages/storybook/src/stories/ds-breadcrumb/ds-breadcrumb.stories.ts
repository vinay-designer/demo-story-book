import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Breadcrumb',
  component: 'ds-breadcrumb',
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => html`
    <ds-breadcrumb>
      <ds-breadcrumb-item href="#">Home</ds-breadcrumb-item>
      <ds-breadcrumb-item href="#">Products</ds-breadcrumb-item>
      <ds-breadcrumb-item href="#">Category</ds-breadcrumb-item>
      <ds-breadcrumb-item current>Current Page</ds-breadcrumb-item>
    </ds-breadcrumb>
  `,
};

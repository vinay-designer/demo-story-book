import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Pagination',
  component: 'ds-pagination',
  tags: ['autodocs'],
  argTypes: {
    total: { control: 'number' },
    pageSize: { control: 'number' },
    currentPage: { control: 'number' },
  },
  args: { total: 100, pageSize: 10, currentPage: 1 },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`<ds-pagination total=${args.total} page-size=${args.pageSize} current-page=${args.currentPage}></ds-pagination>`,
};

export const FewPages: Story = {
  render: () => html`<ds-pagination total="30" page-size="10" current-page="2"></ds-pagination>`,
};

export const ManyPages: Story = {
  render: () => html`<ds-pagination total="500" page-size="10" current-page="25"></ds-pagination>`,
};

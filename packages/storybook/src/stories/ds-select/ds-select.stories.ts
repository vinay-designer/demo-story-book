import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Select',
  component: 'ds-select',
  tags: ['autodocs'],
  argTypes: {
    size: { control: { type: 'select' }, options: ['sm', 'md', 'lg'] },
    disabled: { control: 'boolean' },
    invalid: { control: 'boolean' },
    searchable: { control: 'boolean' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
  },
  args: { size: 'md', disabled: false, invalid: false, searchable: false, label: 'Country', placeholder: 'Select a country' },
};
export default meta;
type Story = StoryObj;

const countries = [
  { label: 'United States', value: 'us' },
  { label: 'United Kingdom', value: 'uk' },
  { label: 'Canada', value: 'ca' },
  { label: 'Australia', value: 'au' },
  { label: 'Germany', value: 'de' },
  { label: 'France', value: 'fr' },
  { label: 'Japan', value: 'jp' },
  { label: 'India', value: 'in' },
];

export const Default: Story = {
  render: (args) => {
    const el = document.createElement('ds-select');
    el.setAttribute('size', args.size);
    el.setAttribute('label', args.label);
    el.setAttribute('placeholder', args.placeholder);
    if (args.disabled) el.setAttribute('disabled', '');
    if (args.invalid) el.setAttribute('invalid', '');
    if (args.searchable) el.setAttribute('searchable', '');
    (el as any).options = countries;
    return el;
  },
};

export const Searchable: Story = {
  render: () => {
    const el = document.createElement('ds-select');
    el.setAttribute('label', 'Country');
    el.setAttribute('placeholder', 'Search countries...');
    el.setAttribute('searchable', '');
    (el as any).options = countries;
    return el;
  },
};

export const WithError: Story = {
  render: () => {
    const el = document.createElement('ds-select');
    el.setAttribute('label', 'Country');
    el.setAttribute('placeholder', 'Select a country');
    el.setAttribute('invalid', '');
    el.setAttribute('error-message', 'Please select a country');
    el.setAttribute('required', '');
    (el as any).options = countries;
    return el;
  },
};

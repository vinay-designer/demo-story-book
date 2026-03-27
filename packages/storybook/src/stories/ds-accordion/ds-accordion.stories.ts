import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Components/Accordion',
  component: 'ds-accordion',
  tags: ['autodocs'],
  argTypes: {
    multiple: { control: 'boolean' },
  },
  args: { multiple: false },
};
export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: (args) => html`
    <ds-accordion ?multiple=${args.multiple}>
      <ds-accordion-item value="1" open>
        <span slot="header">What is this design system?</span>
        A production-grade component library built with Stencil Web Components, supporting React and Angular via auto-generated wrappers.
      </ds-accordion-item>
      <ds-accordion-item value="2">
        <span slot="header">How do I customize the theme?</span>
        Override CSS custom properties prefixed with --ds- on the root element or any parent container.
      </ds-accordion-item>
      <ds-accordion-item value="3">
        <span slot="header">Is it accessible?</span>
        Yes! All components follow WCAG 2.1 AA guidelines with proper ARIA attributes and keyboard navigation.
      </ds-accordion-item>
    </ds-accordion>
  `,
};

export const Multiple: Story = {
  render: () => html`
    <ds-accordion multiple>
      <ds-accordion-item value="1" open><span slot="header">Section 1</span>Content for section 1.</ds-accordion-item>
      <ds-accordion-item value="2" open><span slot="header">Section 2</span>Content for section 2.</ds-accordion-item>
      <ds-accordion-item value="3"><span slot="header">Section 3</span>Content for section 3.</ds-accordion-item>
    </ds-accordion>
  `,
};

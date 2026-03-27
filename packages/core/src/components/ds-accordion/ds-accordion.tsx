import { Component, Prop, h, Host, Listen, Element } from '@stencil/core';

@Component({
  tag: 'ds-accordion',
  styleUrl: 'ds-accordion.css',
  shadow: true,
})
export class DsAccordion {
  @Element() el!: HTMLElement;
  @Prop() multiple: boolean = false;

  @Listen('dsToggle')
  handleItemToggle(event: CustomEvent<{ value: string; open: boolean }>) {
    if (!this.multiple && event.detail.open) {
      const items = Array.from(this.el.querySelectorAll('ds-accordion-item'));
      items.forEach((item) => {
        if (item.getAttribute('value') !== event.detail.value) {
          item.removeAttribute('open');
        }
      });
    }
  }

  render() {
    return (
      <Host>
        <div class="accordion" part="native">
          <slot />
        </div>
      </Host>
    );
  }
}

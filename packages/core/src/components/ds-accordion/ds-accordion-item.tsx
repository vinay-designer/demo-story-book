import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-accordion-item',
  styleUrl: 'ds-accordion.css',
  shadow: true,
})
export class DsAccordionItem {
  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() value: string = '';

  @Event() dsToggle: EventEmitter<{ value: string; open: boolean }>;

  private itemId = `ds-acc-${accordionCounter++}`;

  private handleToggle = () => {
    if (this.disabled) return;
    this.open = !this.open;
    this.dsToggle.emit({ value: this.value, open: this.open });
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      this.handleToggle();
    }
  };

  render() {
    return (
      <Host>
        <div class={{ 'accordion-item': true, 'accordion-item--open': this.open, 'accordion-item--disabled': this.disabled }}>
          <button
            class="accordion-item__header"
            part="header"
            id={`${this.itemId}-header`}
            aria-expanded={String(this.open)}
            aria-controls={`${this.itemId}-panel`}
            aria-disabled={String(this.disabled)}
            disabled={this.disabled}
            onClick={this.handleToggle}
            onKeyDown={this.handleKeyDown}
          >
            <span class="accordion-item__title"><slot name="header" /></span>
            <svg
              class={{ 'accordion-item__chevron': true, 'accordion-item__chevron--open': this.open }}
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
          <div
            class="accordion-item__panel"
            part="panel"
            id={`${this.itemId}-panel`}
            role="region"
            aria-labelledby={`${this.itemId}-header`}
            hidden={!this.open}
          >
            <div class="accordion-item__content">
              <slot />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

let accordionCounter = 0;

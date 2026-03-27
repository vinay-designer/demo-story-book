import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-card',
  styleUrl: 'ds-card.css',
  shadow: true,
})
export class DsCard {
  @Prop({ reflect: true }) variant: 'elevated' | 'outlined' | 'filled' = 'elevated';
  @Prop({ reflect: true }) interactive: boolean = false;
  @Prop({ reflect: true }) padding: 'none' | 'sm' | 'md' | 'lg' = 'md';

  render() {
    return (
      <Host>
        <div
          part="native"
          class={{
            'card': true,
            [`card--${this.variant}`]: true,
            [`card--padding-${this.padding}`]: true,
            'card--interactive': this.interactive,
          }}
          tabIndex={this.interactive ? 0 : undefined}
        >
          <slot name="media" />
          <div class="card__header" part="header"><slot name="header" /></div>
          <div class="card__body" part="body"><slot /></div>
          <div class="card__footer" part="footer"><slot name="footer" /></div>
        </div>
      </Host>
    );
  }
}

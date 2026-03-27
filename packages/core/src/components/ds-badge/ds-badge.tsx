import { Component, Prop, h, Host } from '@stencil/core';

export type BadgeVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ds-badge',
  styleUrl: 'ds-badge.css',
  shadow: true,
})
export class DsBadge {
  @Prop({ reflect: true }) variant: BadgeVariant = 'neutral';
  @Prop({ reflect: true }) size: BadgeSize = 'md';
  @Prop({ reflect: true }) pill: boolean = false;

  render() {
    return (
      <Host>
        <span
          part="native"
          class={{
            'badge': true,
            [`badge--${this.variant}`]: true,
            [`badge--${this.size}`]: true,
            'badge--pill': this.pill,
          }}
        >
          <slot />
        </span>
      </Host>
    );
  }
}

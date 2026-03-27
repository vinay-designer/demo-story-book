import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

export type TagVariant = 'neutral' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
export type TagSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ds-tag',
  styleUrl: 'ds-tag.css',
  shadow: true,
})
export class DsTag {
  @Prop({ reflect: true }) variant: TagVariant = 'neutral';
  @Prop({ reflect: true }) size: TagSize = 'md';
  @Prop({ reflect: true }) removable: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;

  @Event() dsRemove: EventEmitter<void>;

  private handleRemove = (e: MouseEvent) => {
    e.stopPropagation();
    if (!this.disabled) {
      this.dsRemove.emit();
    }
  };

  render() {
    return (
      <Host>
        <span
          part="native"
          class={{
            'tag': true,
            [`tag--${this.variant}`]: true,
            [`tag--${this.size}`]: true,
            'tag--disabled': this.disabled,
          }}
        >
          <slot name="icon" />
          <span class="tag__content"><slot /></span>
          {this.removable && (
            <button
              class="tag__remove"
              aria-label="Remove"
              disabled={this.disabled}
              onClick={this.handleRemove}
              part="remove"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </span>
      </Host>
    );
  }
}

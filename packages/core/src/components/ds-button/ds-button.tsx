import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ds-button',
  styleUrl: 'ds-button.css',
  shadow: true,
})
export class DsButton {
  @Prop({ reflect: true }) variant: ButtonVariant = 'primary';
  @Prop({ reflect: true }) size: ButtonSize = 'md';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) loading: boolean = false;
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';
  @Prop({ reflect: true }) fullWidth: boolean = false;

  @Event() dsClick: EventEmitter<MouseEvent>;

  private handleClick = (event: MouseEvent) => {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.dsClick.emit(event);
  };

  render() {
    return (
      <Host>
        <button
          part="native"
          type={this.type}
          disabled={this.disabled || this.loading}
          aria-disabled={String(this.disabled || this.loading)}
          aria-busy={String(this.loading)}
          class={{
            'button': true,
            [`button--${this.variant}`]: true,
            [`button--${this.size}`]: true,
            'button--loading': this.loading,
            'button--full-width': this.fullWidth,
          }}
          onClick={this.handleClick}
        >
          {this.loading && <ds-spinner size="sm" class="button__spinner" />}
          <span class={{ 'button__content': true, 'button__content--hidden': this.loading }}>
            <slot name="icon-start" />
            <slot />
            <slot name="icon-end" />
          </span>
        </button>
      </Host>
    );
  }
}

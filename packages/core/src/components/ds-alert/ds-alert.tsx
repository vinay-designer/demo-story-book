import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

export type AlertVariant = 'info' | 'success' | 'warning' | 'danger';

@Component({
  tag: 'ds-alert',
  styleUrl: 'ds-alert.css',
  shadow: true,
})
export class DsAlert {
  @Prop({ reflect: true }) variant: AlertVariant = 'info';
  @Prop({ reflect: true }) dismissible: boolean = false;

  @Event() dsDismiss: EventEmitter<void>;

  private handleDismiss = () => {
    this.dsDismiss.emit();
  };

  render() {
    return (
      <Host>
        <div
          part="native"
          role="alert"
          class={{
            'alert': true,
            [`alert--${this.variant}`]: true,
          }}
        >
          <span class="alert__icon">
            <slot name="icon" />
          </span>
          <div class="alert__content">
            <slot />
          </div>
          {this.dismissible && (
            <button
              class="alert__dismiss"
              aria-label="Dismiss alert"
              onClick={this.handleDismiss}
              part="dismiss"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </Host>
    );
  }
}

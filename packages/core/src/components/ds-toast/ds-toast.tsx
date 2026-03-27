import { Component, Prop, Event, EventEmitter, h, Host, Element } from '@stencil/core';

export type ToastVariant = 'info' | 'success' | 'warning' | 'danger';

@Component({
  tag: 'ds-toast',
  styleUrl: 'ds-toast.css',
  shadow: true,
})
export class DsToast {
  @Element() el!: HTMLElement;

  @Prop({ reflect: true }) variant: ToastVariant = 'info';
  @Prop() duration: number = 5000;
  @Prop({ reflect: true }) dismissible: boolean = true;

  @Event() dsDismiss: EventEmitter<void>;

  private timer?: ReturnType<typeof setTimeout>;

  componentDidLoad() {
    if (this.duration > 0) {
      this.timer = setTimeout(() => {
        this.dismiss();
      }, this.duration);
    }
  }

  disconnectedCallback() {
    if (this.timer) clearTimeout(this.timer);
  }

  private dismiss = () => {
    this.dsDismiss.emit();
    this.el.remove();
  };

  render() {
    return (
      <Host>
        <div
          class={{
            'toast': true,
            [`toast--${this.variant}`]: true,
          }}
          role="alert"
          aria-live="assertive"
          part="native"
        >
          <span class="toast__icon">
            <slot name="icon" />
          </span>
          <div class="toast__content">
            <slot />
          </div>
          <slot name="action" />
          {this.dismissible && (
            <button
              class="toast__dismiss"
              aria-label="Dismiss"
              onClick={this.dismiss}
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

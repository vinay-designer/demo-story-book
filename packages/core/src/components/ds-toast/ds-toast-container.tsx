import { Component, Prop, h, Host } from '@stencil/core';

export type ToastPosition = 'top-right' | 'top-left' | 'top-center' | 'bottom-right' | 'bottom-left' | 'bottom-center';

@Component({
  tag: 'ds-toast-container',
  styleUrl: 'ds-toast.css',
  shadow: true,
})
export class DsToastContainer {
  @Prop({ reflect: true }) position: ToastPosition = 'top-right';

  render() {
    return (
      <Host>
        <div
          class={{
            'toast-container': true,
            [`toast-container--${this.position}`]: true,
          }}
          aria-live="polite"
          aria-label="Notifications"
          part="container"
        >
          <slot />
        </div>
      </Host>
    );
  }
}

import { Component, Prop, h, Host } from '@stencil/core';

export type SpinnerSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ds-spinner',
  styleUrl: 'ds-spinner.css',
  shadow: true,
})
export class DsSpinner {
  @Prop({ reflect: true }) size: SpinnerSize = 'md';
  @Prop() label: string = 'Loading';

  render() {
    return (
      <Host role="status" aria-label={this.label}>
        <svg class="spinner" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle class="track" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" />
          <circle class="indicator" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="3" stroke-linecap="round" />
        </svg>
      </Host>
    );
  }
}

import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-tab-panel',
  styleUrl: 'ds-tabs.css',
  shadow: true,
})
export class DsTabPanel {
  @Prop() value: string = '';

  render() {
    return (
      <Host role="tabpanel">
        <div class="tab-panel" part="panel">
          <slot />
        </div>
      </Host>
    );
  }
}

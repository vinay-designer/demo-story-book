import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-tab',
  shadow: true,
})
export class DsTab {
  @Prop() value: string = '';
  @Prop() disabled: boolean = false;

  render() {
    return (
      <Host style={{ display: 'none' }}>
        <slot />
      </Host>
    );
  }
}

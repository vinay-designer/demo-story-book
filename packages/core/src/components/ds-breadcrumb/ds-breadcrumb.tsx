import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-breadcrumb',
  styleUrl: 'ds-breadcrumb.css',
  shadow: true,
})
export class DsBreadcrumb {
  render() {
    return (
      <Host>
        <nav aria-label="Breadcrumb" part="nav">
          <ol class="breadcrumb">
            <slot />
          </ol>
        </nav>
      </Host>
    );
  }
}

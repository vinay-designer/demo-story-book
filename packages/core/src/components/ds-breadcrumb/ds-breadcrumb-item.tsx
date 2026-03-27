import { Component, Prop, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-breadcrumb-item',
  styleUrl: 'ds-breadcrumb.css',
  shadow: true,
})
export class DsBreadcrumbItem {
  @Prop() href?: string;
  @Prop({ reflect: true }) current: boolean = false;

  render() {
    return (
      <Host>
        <li class={{ 'breadcrumb-item': true, 'breadcrumb-item--current': this.current }}>
          {this.href && !this.current ? (
            <a href={this.href} class="breadcrumb-item__link" part="link">
              <slot />
            </a>
          ) : (
            <span class="breadcrumb-item__text" aria-current={this.current ? 'page' : undefined} part="text">
              <slot />
            </span>
          )}
          {!this.current && (
            <span class="breadcrumb-item__separator" aria-hidden="true">
              <slot name="separator">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </slot>
            </span>
          )}
        </li>
      </Host>
    );
  }
}

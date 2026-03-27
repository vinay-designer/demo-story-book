import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-dropdown-item',
  styleUrl: 'ds-dropdown.css',
  shadow: true,
})
export class DsDropdownItem {
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) danger: boolean = false;

  @Event() dsSelect: EventEmitter<void>;

  private handleClick = () => {
    if (this.disabled) return;
    this.dsSelect.emit();
  };

  render() {
    return (
      <Host>
        <button
          class={{
            'dropdown-item': true,
            'dropdown-item--disabled': this.disabled,
            'dropdown-item--danger': this.danger,
          }}
          role="menuitem"
          disabled={this.disabled}
          onClick={this.handleClick}
          part="native"
        >
          <slot name="icon" />
          <span class="dropdown-item__content"><slot /></span>
        </button>
      </Host>
    );
  }
}

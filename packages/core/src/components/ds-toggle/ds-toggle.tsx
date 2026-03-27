import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

export type ToggleSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ds-toggle',
  styleUrl: 'ds-toggle.css',
  shadow: true,
})
export class DsToggle {
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) size: ToggleSize = 'md';
  @Prop() name?: string;
  @Prop() value?: string;

  @Event() dsChange: EventEmitter<boolean>;

  private toggleId = `ds-toggle-${toggleCounter++}`;

  private handleChange = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dsChange.emit(this.checked);
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      this.handleChange();
    }
  };

  render() {
    return (
      <Host>
        <label
          class={{
            'toggle': true,
            [`toggle--${this.size}`]: true,
            'toggle--checked': this.checked,
            'toggle--disabled': this.disabled,
          }}
          htmlFor={this.toggleId}
        >
          <input
            id={this.toggleId}
            type="checkbox"
            role="switch"
            class="toggle__input"
            checked={this.checked}
            disabled={this.disabled}
            name={this.name}
            value={this.value}
            aria-checked={String(this.checked)}
            onChange={this.handleChange}
          />
          <span class="toggle__track" part="track">
            <span class="toggle__thumb" part="thumb" />
          </span>
          <span class="toggle__label" part="label">
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}

let toggleCounter = 0;

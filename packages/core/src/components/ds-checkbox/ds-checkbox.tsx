import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-checkbox',
  styleUrl: 'ds-checkbox.css',
  shadow: true,
})
export class DsCheckbox {
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;
  @Prop({ reflect: true }) indeterminate: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() name?: string;
  @Prop() value?: string;

  @Event() dsChange: EventEmitter<boolean>;

  private checkboxId = `ds-cb-${checkboxCounter++}`;

  private handleChange = () => {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dsChange.emit(this.checked);
  };

  render() {
    return (
      <Host>
        <label class={{ 'checkbox': true, 'checkbox--disabled': this.disabled }} htmlFor={this.checkboxId}>
          <input
            id={this.checkboxId}
            type="checkbox"
            class="checkbox__input"
            checked={this.checked}
            disabled={this.disabled}
            name={this.name}
            value={this.value}
            indeterminate={this.indeterminate}
            aria-checked={this.indeterminate ? 'mixed' : String(this.checked)}
            onChange={this.handleChange}
          />
          <span class={{ 'checkbox__box': true, 'checkbox__box--checked': this.checked || this.indeterminate }} part="box">
            {this.checked && !this.indeterminate && (
              <svg class="checkbox__icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="3.5 8.5 6.5 11.5 12.5 5" />
              </svg>
            )}
            {this.indeterminate && (
              <svg class="checkbox__icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
                <line x1="4" y1="8" x2="12" y2="8" />
              </svg>
            )}
          </span>
          <span class="checkbox__label" part="label">
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}

let checkboxCounter = 0;

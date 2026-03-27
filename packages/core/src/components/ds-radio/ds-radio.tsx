import { Component, Prop, Event, EventEmitter, h, Host } from '@stencil/core';

@Component({
  tag: 'ds-radio',
  styleUrl: 'ds-radio.css',
  shadow: true,
})
export class DsRadio {
  @Prop({ mutable: true, reflect: true }) checked: boolean = false;
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() name?: string;
  @Prop() value?: string;

  @Event() dsChange: EventEmitter<string>;

  private radioId = `ds-radio-${radioCounter++}`;

  private handleChange = () => {
    if (this.disabled) return;
    this.checked = true;
    this.dsChange.emit(this.value);
  };

  render() {
    return (
      <Host>
        <label class={{ 'radio': true, 'radio--disabled': this.disabled }} htmlFor={this.radioId}>
          <input
            id={this.radioId}
            type="radio"
            class="radio__input"
            checked={this.checked}
            disabled={this.disabled}
            name={this.name}
            value={this.value}
            onChange={this.handleChange}
          />
          <span class={{ 'radio__circle': true, 'radio__circle--checked': this.checked }} part="circle">
            {this.checked && <span class="radio__dot" />}
          </span>
          <span class="radio__label" part="label">
            <slot />
          </span>
        </label>
      </Host>
    );
  }
}

let radioCounter = 0;

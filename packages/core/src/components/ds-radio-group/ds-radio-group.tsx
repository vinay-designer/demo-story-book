import { Component, Prop, Event, EventEmitter, h, Host, Listen } from '@stencil/core';

@Component({
  tag: 'ds-radio-group',
  styleUrl: 'ds-radio-group.css',
  shadow: true,
})
export class DsRadioGroup {
  @Prop() label?: string;
  @Prop({ mutable: true }) value?: string;
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() errorMessage?: string;

  @Event() dsChange: EventEmitter<string>;

  @Listen('dsChange')
  handleChildChange(event: CustomEvent<string>) {
    event.stopPropagation();
    this.value = event.detail;
    this.dsChange.emit(this.value);
  }

  render() {
    return (
      <Host>
        <fieldset
          class={{
            'radio-group': true,
            [`radio-group--${this.orientation}`]: true,
            'radio-group--invalid': this.invalid,
          }}
          role="radiogroup"
          aria-label={this.label}
        >
          {this.label && <legend class="radio-group__legend" part="legend">{this.label}</legend>}
          <div class="radio-group__items">
            <slot />
          </div>
          {this.invalid && this.errorMessage && (
            <span class="radio-group__error" role="alert" part="error">{this.errorMessage}</span>
          )}
        </fieldset>
      </Host>
    );
  }
}

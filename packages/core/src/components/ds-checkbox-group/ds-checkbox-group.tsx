import { Component, Prop, Event, EventEmitter, h, Host, Listen } from '@stencil/core';

@Component({
  tag: 'ds-checkbox-group',
  styleUrl: 'ds-checkbox-group.css',
  shadow: true,
})
export class DsCheckboxGroup {
  @Prop() label?: string;
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'vertical';
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() errorMessage?: string;

  @Event() dsGroupChange: EventEmitter<void>;

  @Listen('dsChange')
  handleChildChange() {
    this.dsGroupChange.emit();
  }

  render() {
    return (
      <Host>
        <fieldset
          class={{
            'checkbox-group': true,
            [`checkbox-group--${this.orientation}`]: true,
            'checkbox-group--invalid': this.invalid,
          }}
          role="group"
          aria-label={this.label}
        >
          {this.label && <legend class="checkbox-group__legend" part="legend">{this.label}</legend>}
          <div class="checkbox-group__items">
            <slot />
          </div>
          {this.invalid && this.errorMessage && (
            <span class="checkbox-group__error" role="alert" part="error">{this.errorMessage}</span>
          )}
        </fieldset>
      </Host>
    );
  }
}

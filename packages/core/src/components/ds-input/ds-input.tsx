import { Component, Prop, Event, EventEmitter, State, h, Host, Element } from '@stencil/core';

export type InputType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';
export type InputSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ds-input',
  styleUrl: 'ds-input.css',
  shadow: true,
})
export class DsInput {
  @Element() el!: HTMLElement;

  @Prop() type: InputType = 'text';
  @Prop({ mutable: true }) value: string = '';
  @Prop() placeholder?: string;
  @Prop({ reflect: true }) size: InputSize = 'md';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop() readonly: boolean = false;
  @Prop() required: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() label?: string;
  @Prop() helperText?: string;
  @Prop() errorMessage?: string;
  @Prop() name?: string;
  @Prop() autocomplete?: string;
  @Prop() maxlength?: number;

  @State() focused: boolean = false;

  @Event() dsInput: EventEmitter<string>;
  @Event() dsChange: EventEmitter<string>;
  @Event() dsFocus: EventEmitter<void>;
  @Event() dsBlur: EventEmitter<void>;

  private inputId = `ds-input-${inputCounter++}`;
  private nativeInput?: HTMLInputElement;

  private handleInput = (e: Event) => {
    const input = e.target as HTMLInputElement;
    this.value = input.value;
    this.dsInput.emit(this.value);
  };

  private handleChange = () => {
    this.dsChange.emit(this.value);
  };

  private handleFocus = () => {
    this.focused = true;
    this.dsFocus.emit();
  };

  private handleBlur = () => {
    this.focused = false;
    this.dsBlur.emit();
  };

  render() {
    const hasError = this.invalid && this.errorMessage;

    return (
      <Host>
        <div class={{
          'input-wrapper': true,
          [`input-wrapper--${this.size}`]: true,
          'input-wrapper--disabled': this.disabled,
          'input-wrapper--invalid': this.invalid,
          'input-wrapper--focused': this.focused,
        }}>
          {this.label && (
            <label class="input__label" htmlFor={this.inputId} part="label">
              {this.label}
              {this.required && <span class="input__required" aria-hidden="true">*</span>}
            </label>
          )}
          <div class="input__container">
            <slot name="prefix" />
            <input
              ref={(el) => (this.nativeInput = el)}
              part="native"
              id={this.inputId}
              type={this.type}
              value={this.value}
              placeholder={this.placeholder}
              disabled={this.disabled}
              readOnly={this.readonly}
              required={this.required}
              name={this.name}
              autocomplete={this.autocomplete}
              maxlength={this.maxlength}
              aria-invalid={String(this.invalid)}
              aria-describedby={hasError ? `${this.inputId}-error` : this.helperText ? `${this.inputId}-helper` : undefined}
              class="input__native"
              onInput={this.handleInput}
              onChange={this.handleChange}
              onFocus={this.handleFocus}
              onBlur={this.handleBlur}
            />
            <slot name="suffix" />
          </div>
          {hasError && (
            <span class="input__error" id={`${this.inputId}-error`} role="alert" part="error">
              {this.errorMessage}
            </span>
          )}
          {!hasError && this.helperText && (
            <span class="input__helper" id={`${this.inputId}-helper`} part="helper">
              {this.helperText}
            </span>
          )}
        </div>
      </Host>
    );
  }
}

let inputCounter = 0;

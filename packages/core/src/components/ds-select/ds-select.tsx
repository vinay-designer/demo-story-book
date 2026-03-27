import { Component, Prop, Event, EventEmitter, State, h, Host, Element } from '@stencil/core';
import { Keys } from '../../utils/keyboard';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

@Component({
  tag: 'ds-select',
  styleUrl: 'ds-select.css',
  shadow: true,
})
export class DsSelect {
  @Element() el!: HTMLElement;

  @Prop() options: SelectOption[] = [];
  @Prop({ mutable: true }) value?: string;
  @Prop() placeholder: string = 'Select an option';
  @Prop({ reflect: true }) size: SelectSize = 'md';
  @Prop({ reflect: true }) disabled: boolean = false;
  @Prop({ reflect: true }) invalid: boolean = false;
  @Prop() searchable: boolean = false;
  @Prop() label?: string;
  @Prop() helperText?: string;
  @Prop() errorMessage?: string;
  @Prop() required: boolean = false;
  @Prop() name?: string;

  @State() isOpen: boolean = false;
  @State() searchQuery: string = '';
  @State() highlightedIndex: number = -1;

  @Event() dsChange: EventEmitter<string>;
  @Event() dsSearch: EventEmitter<string>;

  private selectId = `ds-select-${selectCounter++}`;
  private listboxRef?: HTMLElement;

  private get filteredOptions(): SelectOption[] {
    if (!this.searchable || !this.searchQuery) return this.options;
    const query = this.searchQuery.toLowerCase();
    return this.options.filter((opt) => opt.label.toLowerCase().includes(query));
  }

  private get selectedLabel(): string {
    const selected = this.options.find((opt) => opt.value === this.value);
    return selected ? selected.label : '';
  }

  private toggleOpen = () => {
    if (this.disabled) return;
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.highlightedIndex = this.filteredOptions.findIndex((opt) => opt.value === this.value);
    }
  };

  private close = () => {
    this.isOpen = false;
    this.searchQuery = '';
  };

  private selectOption = (option: SelectOption) => {
    if (option.disabled) return;
    this.value = option.value;
    this.dsChange.emit(this.value);
    this.close();
  };

  private handleSearchInput = (e: Event) => {
    this.searchQuery = (e.target as HTMLInputElement).value;
    this.highlightedIndex = 0;
    this.dsSearch.emit(this.searchQuery);
  };

  private handleKeyDown = (e: KeyboardEvent) => {
    const options = this.filteredOptions;

    switch (e.key) {
      case Keys.ESCAPE:
        e.preventDefault();
        this.close();
        break;
      case Keys.ENTER:
      case Keys.SPACE:
        e.preventDefault();
        if (!this.isOpen) {
          this.toggleOpen();
        } else if (this.highlightedIndex >= 0 && options[this.highlightedIndex]) {
          this.selectOption(options[this.highlightedIndex]);
        }
        break;
      case Keys.ARROW_DOWN:
        e.preventDefault();
        if (!this.isOpen) {
          this.toggleOpen();
        } else {
          this.highlightedIndex = Math.min(this.highlightedIndex + 1, options.length - 1);
          this.scrollToHighlighted();
        }
        break;
      case Keys.ARROW_UP:
        e.preventDefault();
        if (this.isOpen) {
          this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
          this.scrollToHighlighted();
        }
        break;
      case Keys.HOME:
        if (this.isOpen) {
          e.preventDefault();
          this.highlightedIndex = 0;
          this.scrollToHighlighted();
        }
        break;
      case Keys.END:
        if (this.isOpen) {
          e.preventDefault();
          this.highlightedIndex = options.length - 1;
          this.scrollToHighlighted();
        }
        break;
    }
  };

  private scrollToHighlighted() {
    requestAnimationFrame(() => {
      if (!this.listboxRef) return;
      const item = this.listboxRef.children[this.highlightedIndex] as HTMLElement;
      if (item) item.scrollIntoView({ block: 'nearest' });
    });
  }

  private handleBackdropClick = () => {
    this.close();
  };

  render() {
    const hasError = this.invalid && this.errorMessage;
    const options = this.filteredOptions;

    return (
      <Host>
        <div class={{
          'select-wrapper': true,
          [`select-wrapper--${this.size}`]: true,
          'select-wrapper--disabled': this.disabled,
          'select-wrapper--invalid': this.invalid,
          'select-wrapper--open': this.isOpen,
        }}>
          {this.label && (
            <label class="select__label" htmlFor={this.selectId} part="label">
              {this.label}
              {this.required && <span class="select__required" aria-hidden="true">*</span>}
            </label>
          )}
          <div class="select__container">
            <button
              id={this.selectId}
              type="button"
              class="select__trigger"
              part="trigger"
              disabled={this.disabled}
              aria-haspopup="listbox"
              aria-expanded={String(this.isOpen)}
              aria-labelledby={this.label ? undefined : undefined}
              onClick={this.toggleOpen}
              onKeyDown={this.handleKeyDown}
            >
              <span class={{ 'select__value': true, 'select__placeholder': !this.value }}>
                {this.value ? this.selectedLabel : this.placeholder}
              </span>
              <svg class={{ 'select__chevron': true, 'select__chevron--open': this.isOpen }} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {this.isOpen && (
              <div class="select__dropdown" part="dropdown">
                {this.searchable && (
                  <div class="select__search">
                    <input
                      class="select__search-input"
                      type="text"
                      placeholder="Search..."
                      value={this.searchQuery}
                      onInput={this.handleSearchInput}
                      onKeyDown={this.handleKeyDown}
                      part="search"
                    />
                  </div>
                )}
                <ul
                  ref={(el) => (this.listboxRef = el)}
                  class="select__listbox"
                  role="listbox"
                  part="listbox"
                >
                  {options.length === 0 && (
                    <li class="select__empty">No options found</li>
                  )}
                  {options.map((option, index) => (
                    <li
                      class={{
                        'select__option': true,
                        'select__option--selected': option.value === this.value,
                        'select__option--highlighted': index === this.highlightedIndex,
                        'select__option--disabled': !!option.disabled,
                      }}
                      role="option"
                      aria-selected={String(option.value === this.value)}
                      aria-disabled={String(!!option.disabled)}
                      onClick={() => this.selectOption(option)}
                      onMouseEnter={() => { this.highlightedIndex = index; }}
                      part="option"
                    >
                      {option.label}
                      {option.value === this.value && (
                        <svg class="select__check" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {hasError && (
            <span class="select__error" role="alert" part="error">{this.errorMessage}</span>
          )}
          {!hasError && this.helperText && (
            <span class="select__helper" part="helper">{this.helperText}</span>
          )}
        </div>

        {this.isOpen && <div class="select__backdrop" onClick={this.handleBackdropClick} />}
      </Host>
    );
  }
}

let selectCounter = 0;

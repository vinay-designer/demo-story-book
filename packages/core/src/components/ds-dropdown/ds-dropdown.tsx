import { Component, Prop, Event, EventEmitter, State, h, Host, Element } from '@stencil/core';
import { Keys } from '../../utils/keyboard';

export type DropdownPlacement = 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end';

@Component({
  tag: 'ds-dropdown',
  styleUrl: 'ds-dropdown.css',
  shadow: true,
})
export class DsDropdown {
  @Element() el!: HTMLElement;

  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop() placement: DropdownPlacement = 'bottom-start';

  @State() highlightedIndex: number = -1;

  @Event() dsOpen: EventEmitter<void>;
  @Event() dsClose: EventEmitter<void>;

  private toggleOpen = () => {
    this.open = !this.open;
    if (this.open) {
      this.highlightedIndex = -1;
      this.dsOpen.emit();
    } else {
      this.dsClose.emit();
    }
  };

  private close = () => {
    this.open = false;
    this.dsClose.emit();
  };

  private getItems(): HTMLElement[] {
    return Array.from(this.el.querySelectorAll('ds-dropdown-item:not([disabled])'));
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    if (!this.open) {
      if (e.key === Keys.ARROW_DOWN || e.key === Keys.ENTER || e.key === Keys.SPACE) {
        e.preventDefault();
        this.toggleOpen();
      }
      return;
    }

    const items = this.getItems();
    switch (e.key) {
      case Keys.ESCAPE:
        e.preventDefault();
        this.close();
        break;
      case Keys.ARROW_DOWN:
        e.preventDefault();
        this.highlightedIndex = Math.min(this.highlightedIndex + 1, items.length - 1);
        break;
      case Keys.ARROW_UP:
        e.preventDefault();
        this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
        break;
      case Keys.HOME:
        e.preventDefault();
        this.highlightedIndex = 0;
        break;
      case Keys.END:
        e.preventDefault();
        this.highlightedIndex = items.length - 1;
        break;
      case Keys.ENTER:
      case Keys.SPACE:
        e.preventDefault();
        if (this.highlightedIndex >= 0 && items[this.highlightedIndex]) {
          items[this.highlightedIndex].click();
        }
        this.close();
        break;
    }
  };

  private handleBackdropClick = () => {
    this.close();
  };

  render() {
    return (
      <Host>
        <div class="dropdown" onKeyDown={this.handleKeyDown}>
          <div class="dropdown__trigger" onClick={this.toggleOpen} part="trigger">
            <slot name="trigger" />
          </div>
          {this.open && (
            <div
              class={{
                'dropdown__menu': true,
                [`dropdown__menu--${this.placement}`]: true,
              }}
              role="menu"
              part="menu"
            >
              <slot />
            </div>
          )}
        </div>
        {this.open && <div class="dropdown__backdrop" onClick={this.handleBackdropClick} />}
      </Host>
    );
  }
}

import { Component, Prop, Event, EventEmitter, Method, Watch, Element, h, Host } from '@stencil/core';
import { trapFocus, releaseFocus } from '../../utils/focus-trap';

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'full';

@Component({
  tag: 'ds-modal',
  styleUrl: 'ds-modal.css',
  shadow: true,
})
export class DsModal {
  @Element() el!: HTMLElement;

  @Prop({ mutable: true, reflect: true }) open: boolean = false;
  @Prop() modalSize: ModalSize = 'md';
  @Prop() closeOnBackdrop: boolean = true;
  @Prop() closeOnEscape: boolean = true;
  @Prop() dialogLabel?: string;
  @Prop() dialogLabelledBy?: string;

  @Event() dsOpen: EventEmitter<void>;
  @Event() dsClose: EventEmitter<void>;
  @Event() dsAfterOpen: EventEmitter<void>;
  @Event() dsAfterClose: EventEmitter<void>;

  private previousActiveElement: HTMLElement | null = null;
  private dialogEl?: HTMLElement;

  @Watch('open')
  handleOpenChange(newValue: boolean) {
    if (newValue) {
      this.previousActiveElement = document.activeElement as HTMLElement;
      this.dsOpen.emit();
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        if (this.dialogEl) {
          trapFocus(this.dialogEl);
        }
        this.dsAfterOpen.emit();
      });
    } else {
      releaseFocus();
      document.body.style.overflow = '';
      this.previousActiveElement?.focus();
      this.dsClose.emit();
      this.dsAfterClose.emit();
    }
  }

  @Method()
  async show() {
    this.open = true;
  }

  @Method()
  async hide() {
    this.open = false;
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.closeOnEscape) {
      this.open = false;
    }
  };

  private handleBackdropClick = () => {
    if (this.closeOnBackdrop) {
      this.open = false;
    }
  };

  disconnectedCallback() {
    if (this.open) {
      releaseFocus();
      document.body.style.overflow = '';
    }
  }

  render() {
    if (!this.open) return <Host />;

    return (
      <Host>
        <div class="modal-overlay" onClick={this.handleBackdropClick} part="overlay">
          <div
            ref={(el) => (this.dialogEl = el)}
            class={{
              'modal-dialog': true,
              [`modal-dialog--${this.modalSize}`]: true,
            }}
            role="dialog"
            aria-modal="true"
            aria-label={this.dialogLabel}
            aria-labelledby={this.dialogLabelledBy}
            onClick={(e) => e.stopPropagation()}
            onKeyDown={this.handleKeyDown}
            tabIndex={-1}
            part="dialog"
          >
            <div class="modal-header" part="header">
              <slot name="header" />
              <button
                class="modal-close"
                aria-label="Close dialog"
                onClick={() => (this.open = false)}
                part="close-button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <div class="modal-body" part="body">
              <slot />
            </div>
            <div class="modal-footer" part="footer">
              <slot name="footer" />
            </div>
          </div>
        </div>
      </Host>
    );
  }
}

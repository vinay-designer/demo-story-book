import { Component, Prop, State, h, Host, Element } from '@stencil/core';

export type TooltipPlacement = 'top' | 'bottom' | 'left' | 'right';

@Component({
  tag: 'ds-tooltip',
  styleUrl: 'ds-tooltip.css',
  shadow: true,
})
export class DsTooltip {
  @Element() el!: HTMLElement;

  @Prop() content: string = '';
  @Prop({ reflect: true }) placement: TooltipPlacement = 'top';
  @Prop() delay: number = 200;

  @State() visible: boolean = false;

  private showTimeout?: ReturnType<typeof setTimeout>;
  private hideTimeout?: ReturnType<typeof setTimeout>;

  private show = () => {
    clearTimeout(this.hideTimeout);
    this.showTimeout = setTimeout(() => {
      this.visible = true;
    }, this.delay);
  };

  private hide = () => {
    clearTimeout(this.showTimeout);
    this.hideTimeout = setTimeout(() => {
      this.visible = false;
    }, 100);
  };

  disconnectedCallback() {
    clearTimeout(this.showTimeout);
    clearTimeout(this.hideTimeout);
  }

  render() {
    return (
      <Host>
        <div
          class="tooltip-wrapper"
          onMouseEnter={this.show}
          onMouseLeave={this.hide}
          onFocusin={this.show}
          onFocusout={this.hide}
        >
          <slot />
          {this.visible && this.content && (
            <div
              class={{
                'tooltip': true,
                [`tooltip--${this.placement}`]: true,
              }}
              role="tooltip"
              part="tooltip"
            >
              <span class="tooltip__arrow" />
              {this.content}
            </div>
          )}
        </div>
      </Host>
    );
  }
}

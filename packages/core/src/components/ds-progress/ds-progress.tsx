import { Component, Prop, h, Host } from '@stencil/core';

export type ProgressVariant = 'primary' | 'success' | 'warning' | 'danger';
export type ProgressSize = 'sm' | 'md' | 'lg';

@Component({
  tag: 'ds-progress',
  styleUrl: 'ds-progress.css',
  shadow: true,
})
export class DsProgress {
  @Prop() value: number = 0;
  @Prop() max: number = 100;
  @Prop({ reflect: true }) variant: ProgressVariant = 'primary';
  @Prop({ reflect: true }) size: ProgressSize = 'md';
  @Prop() label?: string;
  @Prop() showValue: boolean = false;

  private getPercentage(): number {
    return Math.min(100, Math.max(0, (this.value / this.max) * 100));
  }

  render() {
    const percentage = this.getPercentage();

    return (
      <Host>
        <div class="progress-wrapper">
          {(this.label || this.showValue) && (
            <div class="progress__header">
              {this.label && <span class="progress__label" part="label">{this.label}</span>}
              {this.showValue && <span class="progress__value" part="value">{Math.round(percentage)}%</span>}
            </div>
          )}
          <div
            part="track"
            class={{
              'progress': true,
              [`progress--${this.variant}`]: true,
              [`progress--${this.size}`]: true,
            }}
            role="progressbar"
            aria-valuenow={this.value}
            aria-valuemin={0}
            aria-valuemax={this.max}
            aria-label={this.label || `${Math.round(percentage)}% complete`}
          >
            <div
              class="progress__fill"
              part="fill"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </Host>
    );
  }
}

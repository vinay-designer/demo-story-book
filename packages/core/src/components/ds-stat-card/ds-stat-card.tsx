import { Component, Prop, h, Host } from '@stencil/core';

export type StatTrend = 'up' | 'down' | 'neutral';

@Component({
  tag: 'ds-stat-card',
  styleUrl: 'ds-stat-card.css',
  shadow: true,
})
export class DsStatCard {
  @Prop() label: string = '';
  @Prop() value: string = '';
  @Prop() change: string = '';
  @Prop({ reflect: true }) trend: StatTrend = 'neutral';
  @Prop() description: string = '';

  render() {
    return (
      <Host>
        <div class="stat" part="native">
          <div class="stat__header">
            <span class="stat__label">{this.label}</span>
            <slot name="icon" />
          </div>
          <div class="stat__value">{this.value}</div>
          {(this.change || this.description) && (
            <div class="stat__footer">
              {this.change && (
                <span class={{ 'stat__change': true, [`stat__change--${this.trend}`]: true }}>
                  {this.trend === 'up' && '↑ '}
                  {this.trend === 'down' && '↓ '}
                  {this.change}
                </span>
              )}
              {this.description && <span class="stat__desc">{this.description}</span>}
            </div>
          )}
          <slot />
        </div>
      </Host>
    );
  }
}

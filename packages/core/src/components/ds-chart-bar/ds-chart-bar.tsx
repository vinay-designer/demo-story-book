import { Component, Prop, h, Host, State, Watch, Element } from '@stencil/core';

export interface BarChartItem {
  label: string;
  value: number;
  color?: string;
}

@Component({
  tag: 'ds-chart-bar',
  styleUrl: 'ds-chart-bar.css',
  shadow: true,
})
export class DsChartBar {
  @Element() el!: HTMLElement;
  @Prop() data: BarChartItem[] = [];
  @Prop() height: number = 200;
  @Prop({ reflect: true }) orientation: 'vertical' | 'horizontal' = 'vertical';
  @Prop() showValues: boolean = true;
  @Prop() showLabels: boolean = true;
  @Prop() animated: boolean = true;

  @State() maxValue: number = 0;

  @Watch('data')
  handleDataChange() {
    this.calculateMax();
  }

  componentWillLoad() {
    this.calculateMax();
  }

  private calculateMax() {
    this.maxValue = Math.max(...this.data.map(d => d.value), 1);
  }

  private getBarColor(item: BarChartItem, index: number): string {
    if (item.color) return item.color;
    const colors = [
      'var(--ds-color-coral-500, #FF385C)',
      'var(--ds-color-violet-500, #8b5cf6)',
      'var(--ds-color-emerald-500, #10b981)',
      'var(--ds-color-amber-500, #f59e0b)',
      'var(--ds-color-midnight-500, #4a4a7a)',
      'var(--ds-color-rose-500, #f43f5e)',
    ];
    return colors[index % colors.length];
  }

  private formatValue(value: number): string {
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return String(value);
  }

  render() {
    const isVertical = this.orientation === 'vertical';

    return (
      <Host>
        <div class={{ 'chart': true, [`chart--${this.orientation}`]: true }} style={{ height: `${this.height}px` }}>
          {isVertical ? this.renderVertical() : this.renderHorizontal()}
        </div>
        {this.showLabels && (
          <div class={{ 'chart__labels': true, [`chart__labels--${this.orientation}`]: true }}>
            {this.data.map((item, i) => (
              <div class="chart__label-item">
                <span class="chart__label-dot" style={{ backgroundColor: this.getBarColor(item, i) }} />
                <span class="chart__label-text">{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </Host>
    );
  }

  private renderVertical() {
    const barWidth = Math.max(100 / Math.max(this.data.length * 2, 1), 4);
    return (
      <div class="chart__bars chart__bars--vertical">
        {this.data.map((item, i) => {
          const pct = (item.value / this.maxValue) * 100;
          return (
            <div class="chart__bar-group" style={{ width: `${100 / this.data.length}%` }}>
              {this.showValues && (
                <div class="chart__bar-value">{this.formatValue(item.value)}</div>
              )}
              <div
                class={{ 'chart__bar': true, 'chart__bar--animated': this.animated }}
                style={{
                  height: `${pct}%`,
                  backgroundColor: this.getBarColor(item, i),
                  width: `${Math.min(barWidth, 48)}px`,
                  animationDelay: `${i * 0.08}s`,
                }}
                part="bar"
              />
              <div class="chart__bar-label">{item.label}</div>
            </div>
          );
        })}
      </div>
    );
  }

  private renderHorizontal() {
    return (
      <div class="chart__bars chart__bars--horizontal">
        {this.data.map((item, i) => {
          const pct = (item.value / this.maxValue) * 100;
          return (
            <div class="chart__bar-row">
              <div class="chart__bar-row-label">{item.label}</div>
              <div class="chart__bar-track">
                <div
                  class={{ 'chart__bar': true, 'chart__bar--horizontal': true, 'chart__bar--animated': this.animated }}
                  style={{
                    width: `${pct}%`,
                    backgroundColor: this.getBarColor(item, i),
                    animationDelay: `${i * 0.08}s`,
                  }}
                  part="bar"
                />
              </div>
              {this.showValues && (
                <div class="chart__bar-row-value">{this.formatValue(item.value)}</div>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

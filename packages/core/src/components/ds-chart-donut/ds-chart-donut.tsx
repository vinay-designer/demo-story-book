import { Component, Prop, h, Host, Watch, State } from '@stencil/core';

export interface DonutChartItem {
  label: string;
  value: number;
  color?: string;
}

@Component({
  tag: 'ds-chart-donut',
  styleUrl: 'ds-chart-donut.css',
  shadow: true,
})
export class DsChartDonut {
  @Prop() data: DonutChartItem[] = [];
  @Prop() size: number = 200;
  @Prop() thickness: number = 28;
  @Prop() showCenter: boolean = true;
  @Prop() centerLabel: string = '';
  @Prop() centerValue: string = '';
  @Prop() animated: boolean = true;

  @State() total: number = 0;

  @Watch('data')
  handleDataChange() {
    this.total = this.data.reduce((sum, d) => sum + d.value, 0);
  }

  componentWillLoad() {
    this.total = this.data.reduce((sum, d) => sum + d.value, 0);
  }

  private getColor(item: DonutChartItem, index: number): string {
    if (item.color) return item.color;
    const colors = ['#FF385C', '#8b5cf6', '#10b981', '#f59e0b', '#4a4a7a', '#f43f5e', '#06b6d4', '#ec4899'];
    return colors[index % colors.length];
  }

  render() {
    const radius = (this.size - this.thickness) / 2;
    const circumference = 2 * Math.PI * radius;
    const center = this.size / 2;
    let cumulativeOffset = 0;

    return (
      <Host>
        <div class="donut" style={{ width: `${this.size}px`, height: `${this.size}px` }}>
          <svg width={this.size} height={this.size} viewBox={`0 0 ${this.size} ${this.size}`} class="donut__svg">
            {/* Background circle */}
            <circle
              cx={center}
              cy={center}
              r={radius}
              fill="none"
              stroke="var(--ds-color-bg-tertiary, #F7F7F7)"
              stroke-width={this.thickness}
            />
            {/* Data segments */}
            {this.data.map((item, i) => {
              const pct = this.total > 0 ? item.value / this.total : 0;
              const dashLength = pct * circumference;
              const dashGap = circumference - dashLength;
              const offset = -cumulativeOffset * circumference - circumference * 0.25;
              cumulativeOffset += pct;

              return (
                <circle
                  cx={center}
                  cy={center}
                  r={radius}
                  fill="none"
                  stroke={this.getColor(item, i)}
                  stroke-width={this.thickness}
                  stroke-dasharray={`${dashLength} ${dashGap}`}
                  stroke-dashoffset={offset}
                  stroke-linecap="round"
                  class={{ 'donut__segment': true, 'donut__segment--animated': this.animated }}
                  style={{ animationDelay: `${i * 0.1}s` }}
                  part="segment"
                />
              );
            })}
          </svg>
          {this.showCenter && (
            <div class="donut__center" part="center">
              <div class="donut__center-value">{this.centerValue || String(this.total)}</div>
              {this.centerLabel && <div class="donut__center-label">{this.centerLabel}</div>}
            </div>
          )}
        </div>
        <div class="donut__legend">
          {this.data.map((item, i) => (
            <div class="donut__legend-item">
              <span class="donut__legend-dot" style={{ backgroundColor: this.getColor(item, i) }} />
              <span class="donut__legend-label">{item.label}</span>
              <span class="donut__legend-value">{item.value}</span>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}

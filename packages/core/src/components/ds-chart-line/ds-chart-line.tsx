import { Component, Prop, h, Host } from '@stencil/core';

export interface LineChartPoint {
  label: string;
  value: number;
}

export interface LineChartSeries {
  name: string;
  data: LineChartPoint[];
  color?: string;
}

@Component({
  tag: 'ds-chart-line',
  styleUrl: 'ds-chart-line.css',
  shadow: true,
})
export class DsChartLine {
  @Prop() series: LineChartSeries[] = [];
  @Prop() height: number = 200;
  @Prop() showArea: boolean = true;
  @Prop() showDots: boolean = true;
  @Prop() showGrid: boolean = true;
  @Prop() animated: boolean = true;

  private getColor(index: number, seriesColor?: string): string {
    if (seriesColor) return seriesColor;
    const colors = ['#FF385C', '#8b5cf6', '#10b981', '#f59e0b', '#4a4a7a'];
    return colors[index % colors.length];
  }

  render() {
    if (!this.series.length || !this.series[0]?.data?.length) return <Host />;

    const padding = { top: 20, right: 16, bottom: 32, left: 48 };
    const width = 600;
    const chartWidth = width - padding.left - padding.right;
    const chartHeight = this.height - padding.top - padding.bottom;

    const allValues = this.series.flatMap(s => s.data.map(d => d.value));
    const maxVal = Math.max(...allValues, 1);
    const minVal = Math.min(...allValues, 0);
    const range = maxVal - minVal || 1;

    const labels = this.series[0].data.map(d => d.label);
    const xStep = chartWidth / Math.max(labels.length - 1, 1);

    const getX = (i: number) => padding.left + i * xStep;
    const getY = (v: number) => padding.top + chartHeight - ((v - minVal) / range) * chartHeight;

    const gridLines = 4;

    return (
      <Host>
        <svg width="100%" viewBox={`0 0 ${width} ${this.height}`} class="line-chart" preserveAspectRatio="xMidYMid meet">
          {/* Grid lines */}
          {this.showGrid && Array.from({ length: gridLines + 1 }).map((_, i) => {
            const y = padding.top + (chartHeight / gridLines) * i;
            const val = maxVal - (range / gridLines) * i;
            return (
              <g>
                <line x1={padding.left} y1={y} x2={width - padding.right} y2={y} stroke="var(--ds-color-border-subtle, #EFEFEF)" stroke-width="1" />
                <text x={padding.left - 8} y={y + 4} text-anchor="end" class="line-chart__grid-label">{Math.round(val)}</text>
              </g>
            );
          })}

          {/* X labels */}
          {labels.map((label, i) => (
            <text x={getX(i)} y={this.height - 8} text-anchor="middle" class="line-chart__x-label">{label}</text>
          ))}

          {/* Series */}
          {this.series.map((s, si) => {
            const color = this.getColor(si, s.color);
            const points = s.data.map((d, i) => `${getX(i)},${getY(d.value)}`);
            const pathD = `M${points.join(' L')}`;

            const areaPoints = [...points, `${getX(s.data.length - 1)},${padding.top + chartHeight}`, `${getX(0)},${padding.top + chartHeight}`];
            const areaD = `M${areaPoints.join(' L')}Z`;

            return (
              <g>
                {this.showArea && (
                  <path
                    d={areaD}
                    fill={`url(#gradient-${si})`}
                    class={{ 'line-chart__area': true, 'line-chart__area--animated': this.animated }}
                  />
                )}
                <path
                  d={pathD}
                  fill="none"
                  stroke={color}
                  stroke-width="2.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class={{ 'line-chart__line': true, 'line-chart__line--animated': this.animated }}
                />
                {this.showDots && s.data.map((d, i) => (
                  <circle
                    cx={getX(i)}
                    cy={getY(d.value)}
                    r="4"
                    fill="var(--ds-color-bg-primary, #fff)"
                    stroke={color}
                    stroke-width="2.5"
                    class="line-chart__dot"
                  />
                ))}
                <defs>
                  <linearGradient id={`gradient-${si}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stop-color={color} stop-opacity="0.2" />
                    <stop offset="100%" stop-color={color} stop-opacity="0.01" />
                  </linearGradient>
                </defs>
              </g>
            );
          })}
        </svg>

        {/* Legend */}
        {this.series.length > 1 && (
          <div class="line-chart__legend">
            {this.series.map((s, i) => (
              <div class="line-chart__legend-item">
                <span class="line-chart__legend-line" style={{ backgroundColor: this.getColor(i, s.color) }} />
                <span class="line-chart__legend-label">{s.name}</span>
              </div>
            ))}
          </div>
        )}
      </Host>
    );
  }
}

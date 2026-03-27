import { Component, Prop, h, Host } from '@stencil/core';

export interface TimelineItem {
  title: string;
  description?: string;
  time?: string;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'info';
}

@Component({
  tag: 'ds-timeline',
  styleUrl: 'ds-timeline.css',
  shadow: true,
})
export class DsTimeline {
  @Prop() items: TimelineItem[] = [];

  private getColor(variant: string = 'default'): string {
    const colors: Record<string, string> = {
      default: 'var(--ds-color-fg-primary, #141414)',
      success: '#10b981',
      warning: '#f59e0b',
      danger: '#f43f5e',
      info: '#8b5cf6',
    };
    return colors[variant] || colors.default;
  }

  render() {
    return (
      <Host>
        <div class="timeline">
          {this.items.map((item, i) => (
            <div class="timeline__item" style={{ animationDelay: `${i * 0.08}s` }}>
              <div class="timeline__marker">
                <div class="timeline__dot" style={{ backgroundColor: this.getColor(item.variant) }} />
                {i < this.items.length - 1 && <div class="timeline__line" />}
              </div>
              <div class="timeline__content">
                <div class="timeline__header">
                  <span class="timeline__title">{item.title}</span>
                  {item.time && <span class="timeline__time">{item.time}</span>}
                </div>
                {item.description && <p class="timeline__desc">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </Host>
    );
  }
}

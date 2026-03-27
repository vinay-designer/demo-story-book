import { Component, Prop, h, Host } from '@stencil/core';

export type SkeletonVariant = 'text' | 'circular' | 'rectangular' | 'rounded';

@Component({
  tag: 'ds-skeleton',
  styleUrl: 'ds-skeleton.css',
  shadow: true,
})
export class DsSkeleton {
  @Prop({ reflect: true }) variant: SkeletonVariant = 'text';
  @Prop() width: string = '100%';
  @Prop() height: string = '';

  private getDefaultHeight(): string {
    if (this.height) return this.height;
    switch (this.variant) {
      case 'text': return '16px';
      case 'circular': return this.width;
      case 'rectangular': return '120px';
      case 'rounded': return '120px';
      default: return '16px';
    }
  }

  render() {
    return (
      <Host>
        <div
          class={{ 'skeleton': true, [`skeleton--${this.variant}`]: true }}
          style={{ width: this.width, height: this.getDefaultHeight() }}
          part="native"
        />
      </Host>
    );
  }
}

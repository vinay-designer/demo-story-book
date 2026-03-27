import { Component, Prop, State, h, Host } from '@stencil/core';

export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';
export type AvatarStatus = 'online' | 'offline' | 'busy' | 'away';

@Component({
  tag: 'ds-avatar',
  styleUrl: 'ds-avatar.css',
  shadow: true,
})
export class DsAvatar {
  @Prop() src?: string;
  @Prop() alt: string = '';
  @Prop() initials?: string;
  @Prop({ reflect: true }) size: AvatarSize = 'md';
  @Prop({ reflect: true }) status?: AvatarStatus;

  @State() imgFailed: boolean = false;

  private handleImgError = () => {
    this.imgFailed = true;
  };

  private getInitials(): string {
    if (this.initials) return this.initials.slice(0, 2).toUpperCase();
    if (this.alt) {
      return this.alt
        .split(' ')
        .map((w) => w[0])
        .slice(0, 2)
        .join('')
        .toUpperCase();
    }
    return '';
  }

  render() {
    const showImage = this.src && !this.imgFailed;
    const initials = this.getInitials();

    return (
      <Host>
        <span
          part="native"
          class={{
            'avatar': true,
            [`avatar--${this.size}`]: true,
          }}
          role="img"
          aria-label={this.alt}
        >
          {showImage ? (
            <img
              class="avatar__image"
              src={this.src}
              alt={this.alt}
              onError={this.handleImgError}
              part="image"
            />
          ) : initials ? (
            <span class="avatar__initials" part="initials">
              {initials}
            </span>
          ) : (
            <svg class="avatar__fallback" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          )}
          {this.status && (
            <span
              class={{
                'avatar__status': true,
                [`avatar__status--${this.status}`]: true,
              }}
              part="status"
            />
          )}
        </span>
      </Host>
    );
  }
}

import { Component, Prop, Event, EventEmitter, State, h, Host, Element, Watch } from '@stencil/core';
import { Keys } from '../../utils/keyboard';

@Component({
  tag: 'ds-tabs',
  styleUrl: 'ds-tabs.css',
  shadow: true,
})
export class DsTabs {
  @Element() el!: HTMLElement;

  @Prop({ mutable: true }) value: string = '';
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  @State() tabs: { value: string; label: string; disabled: boolean }[] = [];

  @Event() dsChange: EventEmitter<string>;

  componentWillLoad() {
    this.syncTabs();
  }

  @Watch('value')
  handleValueChange() {
    this.updatePanels();
  }

  private syncTabs() {
    const tabEls = Array.from(this.el.querySelectorAll('ds-tab'));
    this.tabs = tabEls.map((tab) => ({
      value: tab.getAttribute('value') || '',
      label: tab.textContent?.trim() || '',
      disabled: tab.hasAttribute('disabled'),
    }));
    if (!this.value && this.tabs.length > 0) {
      this.value = this.tabs[0].value;
    }
    this.updatePanels();
  }

  private updatePanels() {
    const panels = Array.from(this.el.querySelectorAll('ds-tab-panel'));
    panels.forEach((panel) => {
      const panelValue = panel.getAttribute('value');
      if (panelValue === this.value) {
        panel.removeAttribute('hidden');
      } else {
        panel.setAttribute('hidden', '');
      }
    });
  }

  private selectTab(value: string) {
    const tab = this.tabs.find((t) => t.value === value);
    if (tab && !tab.disabled) {
      this.value = value;
      this.dsChange.emit(value);
      this.updatePanels();
    }
  }

  private handleKeyDown = (e: KeyboardEvent) => {
    const enabledTabs = this.tabs.filter((t) => !t.disabled);
    const currentIndex = enabledTabs.findIndex((t) => t.value === this.value);
    let nextIndex = currentIndex;
    const isHorizontal = this.orientation === 'horizontal';

    switch (e.key) {
      case isHorizontal ? Keys.ARROW_RIGHT : Keys.ARROW_DOWN:
        e.preventDefault();
        nextIndex = (currentIndex + 1) % enabledTabs.length;
        break;
      case isHorizontal ? Keys.ARROW_LEFT : Keys.ARROW_UP:
        e.preventDefault();
        nextIndex = (currentIndex - 1 + enabledTabs.length) % enabledTabs.length;
        break;
      case Keys.HOME:
        e.preventDefault();
        nextIndex = 0;
        break;
      case Keys.END:
        e.preventDefault();
        nextIndex = enabledTabs.length - 1;
        break;
      default:
        return;
    }

    this.selectTab(enabledTabs[nextIndex].value);
  };

  render() {
    return (
      <Host>
        <div class={{ 'tabs': true, [`tabs--${this.orientation}`]: true }}>
          <div class="tabs__list" role="tablist" aria-orientation={this.orientation} onKeyDown={this.handleKeyDown} part="tablist">
            {this.tabs.map((tab) => (
              <button
                role="tab"
                class={{
                  'tabs__tab': true,
                  'tabs__tab--active': tab.value === this.value,
                  'tabs__tab--disabled': tab.disabled,
                }}
                aria-selected={String(tab.value === this.value)}
                aria-disabled={String(tab.disabled)}
                tabIndex={tab.value === this.value ? 0 : -1}
                disabled={tab.disabled}
                onClick={() => this.selectTab(tab.value)}
                part="tab"
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div class="tabs__panels" part="panels">
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}

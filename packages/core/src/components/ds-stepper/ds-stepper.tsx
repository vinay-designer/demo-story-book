import { Component, Prop, h, Host } from '@stencil/core';

export interface StepItem {
  label: string;
  description?: string;
}

@Component({
  tag: 'ds-stepper',
  styleUrl: 'ds-stepper.css',
  shadow: true,
})
export class DsStepper {
  @Prop() steps: StepItem[] = [];
  @Prop({ mutable: true, reflect: true }) activeStep: number = 0;
  @Prop({ reflect: true }) orientation: 'horizontal' | 'vertical' = 'horizontal';

  private getStepStatus(index: number): 'completed' | 'active' | 'upcoming' {
    if (index < this.activeStep) return 'completed';
    if (index === this.activeStep) return 'active';
    return 'upcoming';
  }

  render() {
    return (
      <Host>
        <div class={{ 'stepper': true, [`stepper--${this.orientation}`]: true }}>
          {this.steps.map((step, i) => {
            const status = this.getStepStatus(i);
            return (
              <div class={{ 'stepper__step': true, [`stepper__step--${status}`]: true }}>
                <div class="stepper__indicator">
                  <div class={{ 'stepper__circle': true, [`stepper__circle--${status}`]: true }}>
                    {status === 'completed' ? (
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span>{i + 1}</span>
                    )}
                  </div>
                  {i < this.steps.length - 1 && (
                    <div class={{ 'stepper__connector': true, 'stepper__connector--completed': i < this.activeStep }} />
                  )}
                </div>
                <div class="stepper__content">
                  <div class="stepper__label">{step.label}</div>
                  {step.description && <div class="stepper__description">{step.description}</div>}
                </div>
              </div>
            );
          })}
        </div>
      </Host>
    );
  }
}

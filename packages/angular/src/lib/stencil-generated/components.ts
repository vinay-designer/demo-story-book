/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@ds/core';


@ProxyCmp({
  inputs: ['multiple']
})
@Component({
  selector: 'ds-accordion',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['multiple'],
})
export class DsAccordion {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsAccordion extends Components.DsAccordion {}


@ProxyCmp({
  inputs: ['disabled', 'open', 'value']
})
@Component({
  selector: 'ds-accordion-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'open', 'value'],
})
export class DsAccordionItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsToggle']);
  }
}


export declare interface DsAccordionItem extends Components.DsAccordionItem {

  dsToggle: EventEmitter<CustomEvent<{ value: string; open: boolean }>>;
}


@ProxyCmp({
  inputs: ['dismissible', 'variant']
})
@Component({
  selector: 'ds-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dismissible', 'variant'],
})
export class DsAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsDismiss']);
  }
}


export declare interface DsAlert extends Components.DsAlert {

  dsDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['alt', 'initials', 'size', 'src', 'status']
})
@Component({
  selector: 'ds-avatar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alt', 'initials', 'size', 'src', 'status'],
})
export class DsAvatar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsAvatar extends Components.DsAvatar {}


@ProxyCmp({
  inputs: ['pill', 'size', 'variant']
})
@Component({
  selector: 'ds-badge',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['pill', 'size', 'variant'],
})
export class DsBadge {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsBadge extends Components.DsBadge {}


@ProxyCmp({
})
@Component({
  selector: 'ds-breadcrumb',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class DsBreadcrumb {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsBreadcrumb extends Components.DsBreadcrumb {}


@ProxyCmp({
  inputs: ['current', 'href']
})
@Component({
  selector: 'ds-breadcrumb-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['current', 'href'],
})
export class DsBreadcrumbItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsBreadcrumbItem extends Components.DsBreadcrumbItem {}


@ProxyCmp({
  inputs: ['disabled', 'fullWidth', 'loading', 'size', 'type', 'variant']
})
@Component({
  selector: 'ds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'fullWidth', 'loading', 'size', 'type', 'variant'],
})
export class DsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsClick']);
  }
}


export declare interface DsButton extends Components.DsButton {

  dsClick: EventEmitter<CustomEvent<MouseEvent>>;
}


@ProxyCmp({
  inputs: ['interactive', 'padding', 'variant']
})
@Component({
  selector: 'ds-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['interactive', 'padding', 'variant'],
})
export class DsCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsCard extends Components.DsCard {}


@ProxyCmp({
  inputs: ['animated', 'data', 'height', 'orientation', 'showLabels', 'showValues']
})
@Component({
  selector: 'ds-chart-bar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'data', 'height', 'orientation', 'showLabels', 'showValues'],
})
export class DsChartBar {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsChartBar extends Components.DsChartBar {}


@ProxyCmp({
  inputs: ['animated', 'centerLabel', 'centerValue', 'data', 'showCenter', 'size', 'thickness']
})
@Component({
  selector: 'ds-chart-donut',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'centerLabel', 'centerValue', 'data', 'showCenter', 'size', 'thickness'],
})
export class DsChartDonut {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsChartDonut extends Components.DsChartDonut {}


@ProxyCmp({
  inputs: ['animated', 'height', 'series', 'showArea', 'showDots', 'showGrid']
})
@Component({
  selector: 'ds-chart-line',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['animated', 'height', 'series', 'showArea', 'showDots', 'showGrid'],
})
export class DsChartLine {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsChartLine extends Components.DsChartLine {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'indeterminate', 'name', 'value']
})
@Component({
  selector: 'ds-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'indeterminate', 'name', 'value'],
})
export class DsCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsCheckbox extends Components.DsCheckbox {

  dsChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['errorMessage', 'invalid', 'label', 'orientation']
})
@Component({
  selector: 'ds-checkbox-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorMessage', 'invalid', 'label', 'orientation'],
})
export class DsCheckboxGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsGroupChange']);
  }
}


export declare interface DsCheckboxGroup extends Components.DsCheckboxGroup {

  dsGroupChange: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['open', 'placement']
})
@Component({
  selector: 'ds-dropdown',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['open', 'placement'],
})
export class DsDropdown {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsOpen', 'dsClose']);
  }
}


export declare interface DsDropdown extends Components.DsDropdown {

  dsOpen: EventEmitter<CustomEvent<void>>;

  dsClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['danger', 'disabled']
})
@Component({
  selector: 'ds-dropdown-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['danger', 'disabled'],
})
export class DsDropdownItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsSelect']);
  }
}


export declare interface DsDropdownItem extends Components.DsDropdownItem {

  dsSelect: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['autocomplete', 'disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'size', 'type', 'value']
})
@Component({
  selector: 'ds-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'maxlength', 'name', 'placeholder', 'readonly', 'required', 'size', 'type', 'value'],
})
export class DsInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsInput', 'dsChange', 'dsFocus', 'dsBlur']);
  }
}


export declare interface DsInput extends Components.DsInput {

  dsInput: EventEmitter<CustomEvent<string>>;

  dsChange: EventEmitter<CustomEvent<string>>;

  dsFocus: EventEmitter<CustomEvent<void>>;

  dsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['closeOnBackdrop', 'closeOnEscape', 'dialogLabel', 'dialogLabelledBy', 'modalSize', 'open'],
  methods: ['show', 'hide']
})
@Component({
  selector: 'ds-modal',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeOnBackdrop', 'closeOnEscape', 'dialogLabel', 'dialogLabelledBy', 'modalSize', 'open'],
})
export class DsModal {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsOpen', 'dsClose', 'dsAfterOpen', 'dsAfterClose']);
  }
}


export declare interface DsModal extends Components.DsModal {

  dsOpen: EventEmitter<CustomEvent<void>>;

  dsClose: EventEmitter<CustomEvent<void>>;

  dsAfterOpen: EventEmitter<CustomEvent<void>>;

  dsAfterClose: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['currentPage', 'pageSize', 'siblingCount', 'total']
})
@Component({
  selector: 'ds-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'pageSize', 'siblingCount', 'total'],
})
export class DsPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsPageChange']);
  }
}


export declare interface DsPagination extends Components.DsPagination {

  dsPageChange: EventEmitter<CustomEvent<number>>;
}


@ProxyCmp({
  inputs: ['label', 'max', 'showValue', 'size', 'value', 'variant']
})
@Component({
  selector: 'ds-progress',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'max', 'showValue', 'size', 'value', 'variant'],
})
export class DsProgress {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsProgress extends Components.DsProgress {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'name', 'value']
})
@Component({
  selector: 'ds-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name', 'value'],
})
export class DsRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsRadio extends Components.DsRadio {

  dsChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['errorMessage', 'invalid', 'label', 'orientation', 'value']
})
@Component({
  selector: 'ds-radio-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorMessage', 'invalid', 'label', 'orientation', 'value'],
})
export class DsRadioGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsRadioGroup extends Components.DsRadioGroup {

  dsChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'name', 'options', 'placeholder', 'required', 'searchable', 'size', 'value']
})
@Component({
  selector: 'ds-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorMessage', 'helperText', 'invalid', 'label', 'name', 'options', 'placeholder', 'required', 'searchable', 'size', 'value'],
})
export class DsSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange', 'dsSearch']);
  }
}


export declare interface DsSelect extends Components.DsSelect {

  dsChange: EventEmitter<CustomEvent<string>>;

  dsSearch: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['height', 'variant', 'width']
})
@Component({
  selector: 'ds-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['height', 'variant', 'width'],
})
export class DsSkeleton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsSkeleton extends Components.DsSkeleton {}


@ProxyCmp({
  inputs: ['label', 'size']
})
@Component({
  selector: 'ds-spinner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'size'],
})
export class DsSpinner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsSpinner extends Components.DsSpinner {}


@ProxyCmp({
  inputs: ['change', 'description', 'label', 'trend', 'value']
})
@Component({
  selector: 'ds-stat-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['change', 'description', 'label', 'trend', 'value'],
})
export class DsStatCard {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsStatCard extends Components.DsStatCard {}


@ProxyCmp({
  inputs: ['activeStep', 'orientation', 'steps']
})
@Component({
  selector: 'ds-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['activeStep', 'orientation', 'steps'],
})
export class DsStepper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsStepper extends Components.DsStepper {}


@ProxyCmp({
  inputs: ['disabled', 'value']
})
@Component({
  selector: 'ds-tab',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'value'],
})
export class DsTab {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsTab extends Components.DsTab {}


@ProxyCmp({
  inputs: ['value']
})
@Component({
  selector: 'ds-tab-panel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['value'],
})
export class DsTabPanel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsTabPanel extends Components.DsTabPanel {}


@ProxyCmp({
  inputs: ['columns', 'compact', 'data', 'hoverable', 'sortBy', 'sortOrder', 'striped']
})
@Component({
  selector: 'ds-table',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['columns', 'compact', 'data', 'hoverable', 'sortBy', 'sortOrder', 'striped'],
})
export class DsTable {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsSort', 'dsRowClick']);
  }
}


import type { SortEvent as IDsTableSortEvent } from '@ds/core';

export declare interface DsTable extends Components.DsTable {

  dsSort: EventEmitter<CustomEvent<IDsTableSortEvent>>;

  dsRowClick: EventEmitter<CustomEvent<Record<string, unknown>>>;
}


@ProxyCmp({
  inputs: ['orientation', 'value']
})
@Component({
  selector: 'ds-tabs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['orientation', 'value'],
})
export class DsTabs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsTabs extends Components.DsTabs {

  dsChange: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['disabled', 'removable', 'size', 'variant']
})
@Component({
  selector: 'ds-tag',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'removable', 'size', 'variant'],
})
export class DsTag {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsRemove']);
  }
}


export declare interface DsTag extends Components.DsTag {

  dsRemove: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['items']
})
@Component({
  selector: 'ds-timeline',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['items'],
})
export class DsTimeline {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsTimeline extends Components.DsTimeline {}


@ProxyCmp({
  inputs: ['dismissible', 'duration', 'variant']
})
@Component({
  selector: 'ds-toast',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['dismissible', 'duration', 'variant'],
})
export class DsToast {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsDismiss']);
  }
}


export declare interface DsToast extends Components.DsToast {

  dsDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['position']
})
@Component({
  selector: 'ds-toast-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['position'],
})
export class DsToastContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsToastContainer extends Components.DsToastContainer {}


@ProxyCmp({
  inputs: ['checked', 'disabled', 'name', 'size', 'value']
})
@Component({
  selector: 'ds-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['checked', 'disabled', 'name', 'size', 'value'],
})
export class DsToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['dsChange']);
  }
}


export declare interface DsToggle extends Components.DsToggle {

  dsChange: EventEmitter<CustomEvent<boolean>>;
}


@ProxyCmp({
  inputs: ['content', 'delay', 'placement']
})
@Component({
  selector: 'ds-tooltip',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['content', 'delay', 'placement'],
})
export class DsTooltip {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface DsTooltip extends Components.DsTooltip {}



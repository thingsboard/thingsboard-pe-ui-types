import { DestroyRef, ElementRef, InjectionToken, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ReportTemplateType, ReportFilter } from '@shared/models/report.models';
import { EntityType } from '@shared/models/entity-type.models';
import * as i0 from "@angular/core";
export declare const REPORT_FILTER_DATA: InjectionToken<any>;
export interface ReportFilterData {
    panelMode: boolean;
    reportFilter: ReportFilter;
    initialReportFilter?: ReportFilter;
}
export declare class ReportFilterComponent implements OnInit, ControlValueAccessor {
    private data;
    private overlayRef;
    private fb;
    private overlay;
    private nativeElement;
    private viewContainerRef;
    private destroyRef;
    reportFilterPanel: TemplateRef<any>;
    disabled: boolean;
    buttonMode: boolean;
    initialReportFilter: ReportFilter;
    ReportTemplateType: typeof ReportTemplateType;
    EntityType: typeof EntityType;
    panelMode: boolean;
    reportFilterForm: UntypedFormGroup;
    reportOverlayRef: OverlayRef;
    panelResult: ReportFilter;
    private reportFilter;
    private resizeWindows;
    private propagateChange;
    constructor(data: ReportFilterData | undefined, overlayRef: OverlayRef, fb: UntypedFormBuilder, overlay: Overlay, nativeElement: ElementRef, viewContainerRef: ViewContainerRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(reportFilter?: ReportFilter): void;
    toggleReportFilterPanel($event: Event): void;
    cancel(): void;
    update(): void;
    reset(): void;
    private updateReportFilterForm;
    private reportFilterUpdated;
    private reportFilterFromFormValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportFilterComponent, [{ optional: true; }, { optional: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportFilterComponent, "tb-report-filter", never, { "disabled": { "alias": "disabled"; "required": false; }; "buttonMode": { "alias": "buttonMode"; "required": false; }; "initialReportFilter": { "alias": "initialReportFilter"; "required": false; }; }, {}, never, never, false, never>;
}

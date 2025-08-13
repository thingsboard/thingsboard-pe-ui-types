import { DestroyRef, ElementRef, InjectionToken, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { ReportTemplateFilter } from '@shared/models/report.models';
import * as i0 from "@angular/core";
export declare const REPORT_TEMPLATE_FILTER_DATA: InjectionToken<any>;
export interface ReportTemplateFilterData {
    panelMode: boolean;
    reportTemplateFilter: ReportTemplateFilter;
    initialReportTemplateFilter?: ReportTemplateFilter;
}
export declare class ReportTemplateFilterComponent implements OnInit, ControlValueAccessor {
    private data;
    private overlayRef;
    private fb;
    private overlay;
    private nativeElement;
    private viewContainerRef;
    private destroyRef;
    reportTemplateFilterPanel: TemplateRef<any>;
    disabled: boolean;
    buttonMode: boolean;
    initialReportTemplateFilter: ReportTemplateFilter;
    panelMode: boolean;
    reportTemplateTypes: import("@shared/models/report.models").ReportTemplateType[];
    reportTemplateTypeTranslationMap: Map<import("@shared/models/report.models").ReportTemplateType, string>;
    reportFormats: import("@shared/models/report.models").TbReportFormat[];
    reportTemplateFilterForm: UntypedFormGroup;
    reportTemplateFilterOverlayRef: OverlayRef;
    panelResult: ReportTemplateFilter;
    private reportTemplateFilter;
    private resizeWindows;
    private propagateChange;
    constructor(data: ReportTemplateFilterData | undefined, overlayRef: OverlayRef, fb: UntypedFormBuilder, overlay: Overlay, nativeElement: ElementRef, viewContainerRef: ViewContainerRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(reportTemplateFilter?: ReportTemplateFilter): void;
    toggleReportTemplateFilterPanel($event: Event): void;
    cancel(): void;
    update(): void;
    reset(): void;
    private updateReportTemplateFilterForm;
    private reportTemplateFilterUpdated;
    private reportTemplateFilterFromFormValue;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateFilterComponent, [{ optional: true; }, { optional: true; }, null, null, null, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTemplateFilterComponent, "tb-report-template-filter", never, { "disabled": { "alias": "disabled"; "required": false; }; "buttonMode": { "alias": "buttonMode"; "required": false; }; "initialReportTemplateFilter": { "alias": "initialReportTemplateFilter"; "required": false; }; }, {}, never, never, false, never>;
}

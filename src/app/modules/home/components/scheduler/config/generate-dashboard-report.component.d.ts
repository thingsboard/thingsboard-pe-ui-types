import { AfterViewInit, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
import * as i0 from "@angular/core";
export declare class GenerateDashboardReportComponent implements ControlValueAccessor, OnInit, AfterViewInit, OnDestroy, Validator {
    private store;
    private fb;
    modelValue: SchedulerEventConfiguration | null;
    generateReportFormGroup: UntypedFormGroup;
    private destroy$;
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    private updateEnabledState;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: SchedulerEventConfiguration | null): void;
    validate(): ValidationErrors | null;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateDashboardReportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GenerateDashboardReportComponent, "tb-generate-dashboard-report-event-config", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}

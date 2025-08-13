import { AfterViewInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import { ReportConfig } from '@shared/models/report.models';
import * as i0 from "@angular/core";
export declare class GenerateReportComponent implements ControlValueAccessor, AfterViewInit, OnDestroy, Validator {
    private store;
    private fb;
    modelValue: ReportConfig | null;
    generateReportFormGroup: UntypedFormGroup;
    private destroy$;
    disabled: boolean;
    private propagateChange;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    private updateEnabledState;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ReportConfig | null): void;
    validate(): ValidationErrors | null;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<GenerateReportComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GenerateReportComponent, "tb-generate-report-event-config", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}

import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { ReportComponentLayoutSettings } from '@shared/models/report-component.models';
import * as i0 from "@angular/core";
export declare class ReportComponentLayoutSettingsComponent implements OnInit, ControlValueAccessor {
    private fb;
    private destroyRef;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    settingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ReportComponentLayoutSettings): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportComponentLayoutSettingsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportComponentLayoutSettingsComponent, "tb-report-component-layout-settings", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}

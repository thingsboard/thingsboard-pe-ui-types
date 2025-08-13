import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Insets } from '@shared/models/report.models';
import * as i0 from "@angular/core";
export declare class ReportInsetsComponent implements OnInit, ControlValueAccessor {
    private fb;
    private destroyRef;
    disabled: boolean;
    private modelValue;
    private propagateChange;
    insetsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Insets): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportInsetsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportInsetsComponent, "tb-report-insets", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}

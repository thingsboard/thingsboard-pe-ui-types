import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Heading } from '@shared/models/report-component.models';
import * as i0 from "@angular/core";
export declare class ReportHeadingComponent implements OnInit, ControlValueAccessor {
    private fb;
    private destroyRef;
    variableNames: string[];
    disabled: boolean;
    withLayout: boolean;
    private modelValue;
    private propagateChange;
    headingFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Heading): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportHeadingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportHeadingComponent, "tb-report-heading", never, { "variableNames": { "alias": "variableNames"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "withLayout": { "alias": "withLayout"; "required": false; }; }, {}, never, never, false, never>;
}

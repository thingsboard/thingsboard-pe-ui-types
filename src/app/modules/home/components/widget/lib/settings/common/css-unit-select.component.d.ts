import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl } from '@angular/forms';
import { cssUnit } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export declare class CssUnitSelectComponent implements OnInit, ControlValueAccessor {
    private destroyRef;
    disabled: boolean;
    allowEmpty: boolean;
    width: string;
    allowedCssUnits: cssUnit[];
    cssUnitsList: string[];
    cssUnitFormControl: UntypedFormControl;
    modelValue: cssUnit;
    private propagateChange;
    constructor(destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: cssUnit): void;
    updateModel(value: cssUnit): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CssUnitSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CssUnitSelectComponent, "tb-css-unit-select", never, { "disabled": { "alias": "disabled"; "required": false; }; "allowEmpty": { "alias": "allowEmpty"; "required": false; }; "width": { "alias": "width"; "required": false; }; "allowedCssUnits": { "alias": "allowedCssUnits"; "required": false; }; }, {}, never, never, false, never>;
}

import { OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl } from '@angular/forms';
import { cssUnit } from '@shared/models/widget-settings.models';
import * as i0 from "@angular/core";
export declare class CssUnitSelectComponent implements OnInit, ControlValueAccessor {
    disabled: boolean;
    allowEmpty: boolean;
    width: string;
    cssUnitsList: readonly ["px", "em", "%", "rem", "pt", "pc", "in", "cm", "mm", "ex", "ch", "vw", "vh", "vmin", "vmax"];
    cssUnitFormControl: UntypedFormControl;
    modelValue: cssUnit;
    private propagateChange;
    constructor();
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: cssUnit): void;
    updateModel(value: cssUnit): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CssUnitSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CssUnitSelectComponent, "tb-css-unit-select", never, { "disabled": { "alias": "disabled"; "required": false; }; "allowEmpty": { "alias": "allowEmpty"; "required": false; }; "width": { "alias": "width"; "required": false; }; }, {}, never, never, false, never>;
}

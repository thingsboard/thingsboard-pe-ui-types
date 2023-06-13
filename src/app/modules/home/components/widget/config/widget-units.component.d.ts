import { OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, UntypedFormBuilder } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class WidgetUnitsComponent implements ControlValueAccessor, OnInit {
    private fb;
    disabled: boolean;
    unitsFormControl: FormControl;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    writeValue(units?: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetUnitsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetUnitsComponent, "tb-widget-units", never, { "disabled": "disabled"; }, {}, never, never, false, never>;
}

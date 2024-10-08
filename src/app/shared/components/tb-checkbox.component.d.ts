import { EventEmitter } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class TbCheckboxComponent implements ControlValueAccessor {
    innerValue: boolean;
    disabled: boolean;
    trueValue: any;
    falseValue: any;
    valueChange: EventEmitter<any>;
    private propagateChange;
    onHostChange(ev: any): void;
    modelChange($event: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(obj: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbCheckboxComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TbCheckboxComponent, "tb-checkbox", never, { "disabled": { "alias": "disabled"; "required": false; }; "trueValue": { "alias": "trueValue"; "required": false; }; "falseValue": { "alias": "falseValue"; "required": false; }; }, { "valueChange": "valueChange"; }, never, ["*"], false, never>;
}

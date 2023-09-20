import { ElementRef, Renderer2 } from '@angular/core';
import { ControlValueAccessor, FormGroupDirective, NgForm, UntypedFormControl, ValidationErrors, Validator } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import * as i0 from "@angular/core";
export declare class TbJsonToStringDirective implements ControlValueAccessor, Validator, ErrorStateMatcher {
    private render;
    private element;
    private errorStateMatcher;
    private propagateChange;
    onTouched: () => void;
    private parseError;
    private data;
    input(newValue: any): void;
    constructor(render: Renderer2, element: ElementRef, errorStateMatcher: ErrorStateMatcher);
    isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean;
    validate(c: UntypedFormControl): ValidationErrors;
    writeValue(obj: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TbJsonToStringDirective, [null, null, { skipSelf: true; }]>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<TbJsonToStringDirective, "[tb-json-to-string]", never, {}, {}, never, never, false, never>;
}

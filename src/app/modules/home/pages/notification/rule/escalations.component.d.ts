import { OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@app/core/core.state';
import * as i0 from "@angular/core";
export declare class EscalationsComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    private store;
    private fb;
    escalationsFormGroup: FormGroup;
    required: boolean;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    constructor(store: Store<AppState>, fb: FormBuilder);
    registerOnChange(fn: any): void;
    ngOnDestroy(): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    get escalationsFormArray(): FormArray;
    setDisabledState(isDisabled: boolean): void;
    writeValue(escalations: {
        [key: string]: Array<string>;
    } | null): void;
    removeEscalation(index: number): void;
    addEscalation(delay?: number): void;
    validate(c: AbstractControl): ValidationErrors | null;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<EscalationsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EscalationsComponent, "tb-escalations-component", never, { "required": { "alias": "required"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}

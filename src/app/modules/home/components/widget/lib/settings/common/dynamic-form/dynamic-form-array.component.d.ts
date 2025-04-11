import { DestroyRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { FormProperty } from '@shared/models/dynamic-form.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class DynamicFormArrayComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private destroyRef;
    disabled: boolean;
    itemProperty: FormProperty;
    title: string;
    propertiesFormGroup: UntypedFormGroup;
    get dragEnabled(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(values: any[] | undefined): void;
    validate(_c: UntypedFormControl): {
        properties: {
            valid: boolean;
        };
    };
    propertyDrop(event: CdkDragDrop<string[]>): void;
    propertiesFormArray(): UntypedFormArray;
    trackByProperty(_index: number, propertyControl: AbstractControl): any;
    removeProperty(index: number, emitEvent?: boolean): void;
    addProperty(): void;
    private preparePropertiesFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormArrayComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormArrayComponent, "tb-dynamic-form-array", never, { "disabled": { "alias": "disabled"; "required": false; }; "itemProperty": { "alias": "itemProperty"; "required": false; }; "title": { "alias": "title"; "required": false; }; }, {}, never, never, false, never>;
}

import { ChangeDetectorRef, DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { FormSelectItem } from '@shared/models/dynamic-form.models';
import { DynamicFormSelectItemsComponent } from '@home/components/widget/lib/settings/common/dynamic-form/dynamic-form-select-items.component';
import { ValueType } from '@shared/models/constants';
import * as i0 from "@angular/core";
export declare const selectItemValid: (item: FormSelectItem) => boolean;
export declare class DynamicFormSelectItemRowComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private destroyRef;
    private cd;
    private selectItemsComponent;
    ValueType: typeof ValueType;
    disabled: boolean;
    index: number;
    selectItemRemoved: EventEmitter<any>;
    selectItemRowFormGroup: UntypedFormGroup;
    modelValue: FormSelectItem;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef, cd: ChangeDetectorRef, selectItemsComponent: DynamicFormSelectItemsComponent);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: FormSelectItem): void;
    validate(_c: UntypedFormControl): {
        itemValueNotUnique: boolean;
        selectItem?: undefined;
    } | {
        selectItem: boolean;
        itemValueNotUnique?: undefined;
    };
    private selectItemValueValidator;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormSelectItemRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormSelectItemRowComponent, "tb-dynamic-form-select-item-row", never, { "disabled": { "alias": "disabled"; "required": false; }; "index": { "alias": "index"; "required": false; }; }, { "selectItemRemoved": "selectItemRemoved"; }, never, never, false, never>;
}

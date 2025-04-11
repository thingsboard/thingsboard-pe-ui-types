import { DestroyRef, OnInit, QueryList } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { TranslateService } from '@ngx-translate/core';
import { FormSelectItem } from '@shared/models/dynamic-form.models';
import { DynamicFormSelectItemRowComponent } from '@home/components/widget/lib/settings/common/dynamic-form/dynamic-form-select-item-row.component';
import * as i0 from "@angular/core";
export declare class DynamicFormSelectItemsComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private destroyRef;
    private translate;
    styleDisplay: string;
    styleOverflow: string;
    selectItemRows: QueryList<DynamicFormSelectItemRowComponent>;
    disabled: boolean;
    selectItemsFormGroup: UntypedFormGroup;
    errorText: string;
    get dragEnabled(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef, translate: TranslateService);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: FormSelectItem[] | undefined): void;
    validate(_c: UntypedFormControl): {
        selectItems: {
            valid: boolean;
        };
    };
    selectItemValueUnique(value: any, index: number): boolean;
    selectItemDrop(event: CdkDragDrop<string[]>): void;
    selectItemsFormArray(): UntypedFormArray;
    trackBySelectItem(_index: number, selectItemControl: AbstractControl): any;
    removeSelectItem(index: number, emitEvent?: boolean): void;
    addSelectItem(): void;
    private prepareSelectItemsFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormSelectItemsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormSelectItemsComponent, "tb-dynamic-form-select-items", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}

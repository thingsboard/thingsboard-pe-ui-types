import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface DataKeySelectOption {
    value: string;
    label?: string;
}
export declare const dataKeySelectOptionValidator: (control: AbstractControl) => {
    dataKeySelectOption: boolean;
};
export declare class DataKeySelectOptionComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    expanded: boolean;
    removeSelectOption: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    selectOptionFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DataKeySelectOption): void;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataKeySelectOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataKeySelectOptionComponent, "tb-datakey-select-option", never, { "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; }, { "removeSelectOption": "removeSelectOption"; }, never, never, false, never>;
}

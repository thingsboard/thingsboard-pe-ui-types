import { EventEmitter, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export interface DataKeySelectOption {
    value: string;
    label?: string;
}
export declare function dataKeySelectOptionValidator(control: AbstractControl): {
    dataKeySelectOption: boolean;
};
export declare class DataKeySelectOptionComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private domSanitizer;
    private fb;
    disabled: boolean;
    expanded: boolean;
    removeSelectOption: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    selectOptionFormGroup: FormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, domSanitizer: DomSanitizer, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: DataKeySelectOption): void;
    selectOptionHtml(): SafeHtml;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DataKeySelectOptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DataKeySelectOptionComponent, "tb-datakey-select-option", never, { "disabled": "disabled"; "expanded": "expanded"; }, { "removeSelectOption": "removeSelectOption"; }, never, never>;
}

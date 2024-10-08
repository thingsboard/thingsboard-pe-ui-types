import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidatorFn } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface GpioItem {
    pin: number;
    label: string;
    row: number;
    col: number;
    color?: string;
}
export declare const gpioItemValidator: (hasColor: boolean) => ValidatorFn;
export declare class GpioItemComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private fb;
    disabled: boolean;
    expanded: boolean;
    hasColor: boolean;
    removeGpioItem: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    gpioItemFormGroup: UntypedFormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, fb: UntypedFormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: GpioItem): void;
    numberText(value: any, minValue: number): string;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<GpioItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GpioItemComponent, "tb-gpio-item", never, { "disabled": { "alias": "disabled"; "required": false; }; "expanded": { "alias": "expanded"; "required": false; }; "hasColor": { "alias": "hasColor"; "required": false; }; }, { "removeGpioItem": "removeGpioItem"; }, never, never, false, never>;
}

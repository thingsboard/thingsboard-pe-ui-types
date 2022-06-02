import { EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidatorFn } from '@angular/forms';
import { PageComponent } from '@shared/components/page.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { TranslateService } from '@ngx-translate/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export interface GpioItem {
    pin: number;
    label: string;
    row: number;
    col: number;
    color?: string;
}
export declare function gpioItemValidator(hasColor: boolean): ValidatorFn;
export declare class GpioItemComponent extends PageComponent implements OnInit, ControlValueAccessor {
    protected store: Store<AppState>;
    private translate;
    private domSanitizer;
    private fb;
    disabled: boolean;
    expanded: boolean;
    hasColor: boolean;
    removeGpioItem: EventEmitter<any>;
    private modelValue;
    private propagateChange;
    gpioItemFormGroup: FormGroup;
    constructor(store: Store<AppState>, translate: TranslateService, domSanitizer: DomSanitizer, fb: FormBuilder);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: GpioItem): void;
    gpioItemHtml(): SafeHtml;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<GpioItemComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GpioItemComponent, "tb-gpio-item", never, { "disabled": "disabled"; "expanded": "expanded"; "hasColor": "hasColor"; }, { "removeGpioItem": "removeGpioItem"; }, never, never>;
}

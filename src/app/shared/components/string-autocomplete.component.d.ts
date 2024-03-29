import { OnInit, ElementRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { MatFormFieldAppearance, SubscriptSizing } from '@angular/material/form-field';
import * as i0 from "@angular/core";
export declare class StringAutocompleteComponent implements ControlValueAccessor, OnInit {
    private fb;
    private translate;
    nameInput: ElementRef;
    disabled: boolean;
    required: boolean;
    fetchOptionsFn: (searchText?: string) => Observable<Array<string>>;
    placeholderText: string;
    subscriptSizing: SubscriptSizing;
    additionalClass: string | string[] | Record<string, boolean | undefined | null>;
    appearance: MatFormFieldAppearance;
    label: string;
    tooltipClass: string;
    errorText: string;
    showInlineError: boolean;
    selectionFormControl: FormControl;
    modelValue: string | null;
    filteredOptions$: Observable<Array<string>>;
    searchText: string;
    private dirty;
    private propagateChange;
    constructor(fb: FormBuilder, translate: TranslateService);
    ngOnInit(): void;
    writeValue(option?: string): void;
    onFocus(): void;
    updateView(value: string): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    clear(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<StringAutocompleteComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<StringAutocompleteComponent, "tb-string-autocomplete", never, { "disabled": "disabled"; "required": "required"; "fetchOptionsFn": "fetchOptionsFn"; "placeholderText": "placeholderText"; "subscriptSizing": "subscriptSizing"; "additionalClass": "additionalClass"; "appearance": "appearance"; "label": "label"; "tooltipClass": "tooltipClass"; "errorText": "errorText"; "showInlineError": "showInlineError"; }, {}, never, never, false, never>;
}

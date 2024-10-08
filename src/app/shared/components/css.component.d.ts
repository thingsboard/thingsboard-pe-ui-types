import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { RafService } from '@core/services/raf.service';
import * as i0 from "@angular/core";
export declare class CssComponent implements OnInit, OnDestroy, ControlValueAccessor, Validator {
    elementRef: ElementRef;
    private utils;
    private translate;
    protected store: Store<AppState>;
    private raf;
    private cd;
    cssEditorElmRef: ElementRef;
    private cssEditor;
    private editorsResizeCaf;
    private editorResize$;
    private ignoreChange;
    label: string;
    disabled: boolean;
    fillHeight: boolean;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    fullscreen: boolean;
    modelValue: string;
    hasErrors: boolean;
    private propagateChange;
    constructor(elementRef: ElementRef, utils: UtilsService, translate: TranslateService, store: Store<AppState>, raf: RafService, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private onAceEditorResize;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: UntypedFormControl): {
        css: {
            valid: boolean;
        };
    };
    beautifyCss(): void;
    writeValue(value: string): void;
    updateView(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CssComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CssComponent, "tb-css", never, { "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fillHeight": { "alias": "fillHeight"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}

import { ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { RafService } from '@core/services/raf.service';
import * as i0 from "@angular/core";
export declare class JsonObjectEditComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {
    elementRef: ElementRef;
    protected store: Store<AppState>;
    private raf;
    jsonEditorElmRef: ElementRef;
    private jsonEditor;
    private editorsResizeCaf;
    private editorResize$;
    toastTargetId: string;
    label: string;
    disabled: boolean;
    fillHeight: boolean;
    editorStyle: {
        [klass: string]: any;
    };
    sort: (key: string, value: any) => any;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    private readonlyValue;
    get readonly(): boolean;
    set readonly(value: boolean);
    fullscreen: boolean;
    modelValue: any;
    contentValue: string;
    objectValid: boolean;
    validationError: string;
    errorShowed: boolean;
    ignoreChange: boolean;
    private propagateChange;
    constructor(elementRef: ElementRef, store: Store<AppState>, raf: RafService);
    ngOnInit(): void;
    ngOnDestroy(): void;
    private onAceEditorResize;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(c: UntypedFormControl): {
        jsonParseError: {
            valid: boolean;
        };
    };
    validateOnSubmit(): void;
    cleanupJsonErrors(): void;
    beautifyJSON(): void;
    minifyJSON(): void;
    writeValue(value: any): void;
    updateView(): void;
    onFullscreen(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsonObjectEditComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonObjectEditComponent, "tb-json-object-edit", never, { "label": "label"; "disabled": "disabled"; "fillHeight": "fillHeight"; "editorStyle": "editorStyle"; "sort": "sort"; "required": "required"; "readonly": "readonly"; }, {}, never, never, false, never>;
}

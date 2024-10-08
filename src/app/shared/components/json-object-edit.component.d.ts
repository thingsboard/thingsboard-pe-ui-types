import { ChangeDetectorRef, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormControl, Validator, AbstractControl, ValidationErrors } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { RafService } from '@core/services/raf.service';
import * as i0 from "@angular/core";
export declare const jsonRequired: (control: AbstractControl) => ValidationErrors | null;
export declare class JsonObjectEditComponent implements OnInit, ControlValueAccessor, Validator, OnDestroy {
    elementRef: ElementRef;
    protected store: Store<AppState>;
    private raf;
    private cd;
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
    jsonRequired: boolean;
    readonly: boolean;
    fullscreen: boolean;
    modelValue: any;
    contentValue: string;
    objectValid: boolean;
    validationError: string;
    errorShowed: boolean;
    ignoreChange: boolean;
    private propagateChange;
    constructor(elementRef: ElementRef, store: Store<AppState>, raf: RafService, cd: ChangeDetectorRef);
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
    static ɵcmp: i0.ɵɵComponentDeclaration<JsonObjectEditComponent, "tb-json-object-edit", never, { "label": { "alias": "label"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; "fillHeight": { "alias": "fillHeight"; "required": false; }; "editorStyle": { "alias": "editorStyle"; "required": false; }; "sort": { "alias": "sort"; "required": false; }; "jsonRequired": { "alias": "jsonRequired"; "required": false; }; "readonly": { "alias": "readonly"; "required": false; }; }, {}, never, never, false, never>;
}

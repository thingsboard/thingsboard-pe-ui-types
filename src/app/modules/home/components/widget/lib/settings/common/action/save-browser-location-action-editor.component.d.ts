import { DestroyRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { SaveBrowserLocationDescriptor } from '@shared/models/location.models';
import { WidgetActionCallbacks } from '@home/components/widget/action/manage-widget-actions.component.models';
import * as i0 from "@angular/core";
export declare class SaveBrowserLocationActionEditorComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private destroyRef;
    disabled: boolean;
    callbacks: WidgetActionCallbacks;
    formGroup: FormGroup;
    getLocationKeys: import("@shared/models/location.models").LocationKey[];
    private propagateChange;
    constructor(fb: FormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value?: SaveBrowserLocationDescriptor): void;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SaveBrowserLocationActionEditorComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SaveBrowserLocationActionEditorComponent, "tb-save-browser-location-action-editor", never, { "disabled": { "alias": "disabled"; "required": false; }; "callbacks": { "alias": "callbacks"; "required": false; }; }, {}, never, never, false, never>;
}

import { ChangeDetectorRef, DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormProperty, FormPropertyContainerType, FormPropertyGroup, FormPropertyType } from '@shared/models/dynamic-form.models';
import { CustomTranslatePipe } from '@shared/pipe/custom-translate.pipe';
import { ContentType } from '@shared/models/constants';
import { DomSanitizer } from '@angular/platform-browser';
import * as i0 from "@angular/core";
export declare class DynamicFormComponent implements OnInit, OnChanges, ControlValueAccessor, Validator {
    protected store: Store<AppState>;
    private customTranslate;
    private sanitizer;
    private destroyRef;
    private fb;
    private cd;
    isInputFieldPropertyType: (type: FormPropertyType) => boolean;
    FormPropertyContainerType: typeof FormPropertyContainerType;
    FormPropertyType: typeof FormPropertyType;
    ContentType: typeof ContentType;
    disabled: boolean;
    properties: FormProperty[];
    title: string;
    isArrayItem: boolean;
    stroked: boolean;
    noPadding: boolean;
    noBorder: boolean;
    private modelValue;
    private propagateChange;
    private validatorTriggers;
    propertiesFormGroup: UntypedFormGroup;
    propertyGroups: FormPropertyGroup[];
    constructor(store: Store<AppState>, customTranslate: CustomTranslatePipe, sanitizer: DomSanitizer, destroyRef: DestroyRef, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: {
        [id: string]: any;
    }): void;
    validate(_c: UntypedFormControl): {
        properties: {
            valid: boolean;
        };
    };
    private loadMetadata;
    private calculateControlsState;
    private updateControlsState;
    private setupValue;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormComponent, "tb-dynamic-form", never, { "disabled": { "alias": "disabled"; "required": false; }; "properties": { "alias": "properties"; "required": false; }; "title": { "alias": "title"; "required": false; }; "isArrayItem": { "alias": "isArrayItem"; "required": false; }; "stroked": { "alias": "stroked"; "required": false; }; "noPadding": { "alias": "noPadding"; "required": false; }; "noBorder": { "alias": "noBorder"; "required": false; }; }, {}, never, [".tb-properties-content"], false, never>;
}

import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, Validator } from '@angular/forms';
import { AttributeName, AttributesNameValueMap } from './lwm2m-profile-config.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { PageComponent } from '@shared/components/page.component';
import * as i0 from "@angular/core";
export declare class Lwm2mAttributesKeyListComponent extends PageComponent implements ControlValueAccessor, OnDestroy, OnDestroy, Validator {
    protected store: Store<AppState>;
    private fb;
    attributeNames: any;
    attributeNameTranslationMap: Map<AttributeName, string>;
    disabled: boolean;
    isResource: boolean;
    attributesValueFormGroup: FormGroup;
    private propagateChange;
    private valueChange$;
    private destroy$;
    private usedAttributesName;
    constructor(store: Store<AppState>, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(keyValMap: AttributesNameValueMap): void;
    attributesValueFormArray(): FormArray;
    removeKeyVal(index: number): void;
    addKeyVal(): void;
    private createdFormGroup;
    validate(): {
        attributesValue: {
            valid: boolean;
        };
    };
    private updateModel;
    isDisabledAttributeName(type: AttributeName, index: number): boolean;
    private getFirstUnusedAttributesName;
    private updateUsedAttributesName;
    get isAddEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mAttributesKeyListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mAttributesKeyListComponent, "tb-lwm2m-attributes-key-list", never, { "disabled": "disabled"; "isResource": "isResource"; }, {}, never, never>;
}

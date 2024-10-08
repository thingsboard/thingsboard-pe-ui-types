import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, Validator } from '@angular/forms';
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
    attributesValueFormGroup: UntypedFormGroup;
    private propagateChange;
    private destroy$;
    private usedAttributesName;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(keyValMap: AttributesNameValueMap): void;
    attributesValueFormArray(): UntypedFormArray;
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
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mAttributesKeyListComponent, "tb-lwm2m-attributes-key-list", never, { "disabled": { "alias": "disabled"; "required": false; }; "isResource": { "alias": "isResource"; "required": false; }; }, {}, never, never, false, never>;
}

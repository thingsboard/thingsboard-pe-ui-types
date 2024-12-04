import { EventEmitter } from '@angular/core';
import { ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { SignUpField, SignUpFieldId } from '@shared/models/self-register.models';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class MobileRegistrationFieldsRowComponent implements ControlValueAccessor, Validator {
    private fb;
    private translate;
    allowFieldIds: SignUpFieldId[];
    disabled: boolean;
    fieldRemoved: EventEmitter<any>;
    fieldForm: import("@angular/forms").FormGroup<{
        required: import("@angular/forms").FormControl<boolean>;
        id: import("@angular/forms").FormControl<SignUpFieldId>;
        label: import("@angular/forms").FormControl<string>;
    }>;
    SignUpFieldMap: Map<SignUpFieldId, SignUpField>;
    private propagateChange;
    constructor(fb: FormBuilder, translate: TranslateService);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(value: SignUpField): void;
    get hideModify(): boolean;
    private updatedDisabledState;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileRegistrationFieldsRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileRegistrationFieldsRowComponent, "tb-mobile-registration-fields-row", never, { "allowFieldIds": { "alias": "allowFieldIds"; "required": false; }; "disabled": { "alias": "disabled"; "required": false; }; }, { "fieldRemoved": "fieldRemoved"; }, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
}

import { AbstractControl, ControlValueAccessor, FormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { SignUpField, SignUpFieldId } from '@shared/models/self-register.models';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import * as i0 from "@angular/core";
export declare class MobileRegistrationFieldsPanelComponent implements ControlValueAccessor, Validator {
    private fb;
    disabled: boolean;
    registrationFields: import("@angular/forms").FormArray<import("@angular/forms").FormControl<SignUpField>>;
    allowRegistrationFields: SignUpFieldId[];
    readonly maxFields: number;
    private propagateChange;
    constructor(fb: FormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(registrationFields: Array<SignUpField>): void;
    get dragEnabled(): boolean;
    addFields(): void;
    trackByFields(_index: number, fieldControl: AbstractControl): any;
    fieldDrop(event: CdkDragDrop<string[]>): void;
    removeField(index: number): void;
    private calculateAllowFields;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileRegistrationFieldsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileRegistrationFieldsPanelComponent, "tb-mobile-registration-fields-panel", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
    static ngAcceptInputType_disabled: unknown;
}

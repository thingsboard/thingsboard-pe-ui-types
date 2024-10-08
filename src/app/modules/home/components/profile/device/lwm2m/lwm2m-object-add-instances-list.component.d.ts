import { ElementRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import * as i0 from "@angular/core";
export declare class Lwm2mObjectAddInstancesListComponent implements ControlValueAccessor, Validator {
    private fb;
    private requiredValue;
    disabled: boolean;
    get required(): boolean;
    set required(value: boolean);
    instanceId: ElementRef<HTMLInputElement>;
    instancesListFormGroup: UntypedFormGroup;
    instancesId: Set<number>;
    separatorKeysCodes: number[];
    instanceIdValueMax: number;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: Set<number>): void;
    validate(): ValidationErrors | null;
    add: (event: MatChipInputEvent) => void;
    remove: (object: number) => void;
    onFocus(): void;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mObjectAddInstancesListComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mObjectAddInstancesListComponent, "tb-profile-lwm2m-object-add-instances-list", never, { "disabled": { "alias": "disabled"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}

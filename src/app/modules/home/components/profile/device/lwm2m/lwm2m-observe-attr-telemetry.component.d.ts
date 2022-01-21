import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormArray, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { ObjectLwM2M } from './lwm2m-profile-config.models';
import { MatDialog } from '@angular/material/dialog';
import * as i0 from "@angular/core";
export declare class Lwm2mObserveAttrTelemetryComponent implements ControlValueAccessor, OnDestroy, Validator {
    private fb;
    private dialog;
    private cd;
    modelsFormGroup: FormGroup;
    private requiredValue;
    get required(): boolean;
    set required(value: boolean);
    disabled: boolean;
    private valueChange$;
    private propagateChange;
    constructor(fb: FormBuilder, dialog: MatDialog, cd: ChangeDetectorRef);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ObjectLwM2M[]): void;
    validate(): ValidationErrors | null;
    get modelsFormArray(): FormArray;
    private updateModels;
    private createModelFormGroup;
    private updateModel;
    private updateValidators;
    trackByParams: (index: number, objectLwM2M: ObjectLwM2M) => number;
    /**
     * Instances: indicates whether this Object supports multiple Object Instances or not.
     * 1) Field in object: <MultipleInstances> == Multiple/Single
     * 2) Field in object: <Mandatory> == Mandatory/Optional
     * If this field is “Multiple” then the number of Object Instance can be from 0 to many (Object Instance ID MAX_ID=65535).
     * If this field is “Single” then the number of Object Instance can be from 0 to 1. (max count == 1)
     * If the Object field “Mandatory” is “Mandatory” and the Object field “Instances” is “Single” then -
     * the number of Object Instance MUST be 1.
     * 1. <MultipleInstances> == Multiple (true), <Mandatory>  == Optional  (false) -
     *   Object Instance ID MIN_ID=0 MAX_ID=65535 (there may be none)
     * 2. <MultipleInstances> == Multiple (true), <Mandatory>  == Mandatory (true) -
     *   Object Instance ID MIN_ID=0 MAX_ID=65535 (min one mandatory)
     * 3. <MultipleInstances> == Single   (false), <Mandatory> == Optional  (false) -
     *   Object Instance ID cnt_max = 1 cnt_min = 0 (there may be none )
     * 4. <MultipleInstances> == Single   (false), <Mandatory> == Mandatory (true) -
     *   Object Instance ID cnt_max = cnt_min = 1 (there must always be one)
     */
    addInstances: ($event: Event, control: AbstractControl) => void;
    private updateInstancesIds;
    private diffBetweenSet;
    private instancesToSetId;
    getNameObject: (objectLwM2M: ObjectLwM2M) => string;
    static ɵfac: i0.ɵɵFactoryDeclaration<Lwm2mObserveAttrTelemetryComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<Lwm2mObserveAttrTelemetryComponent, "tb-profile-lwm2m-observe-attr-telemetry", never, { "required": "required"; "disabled": "disabled"; }, {}, never, never>;
}

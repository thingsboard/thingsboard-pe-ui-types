import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { OpcUaSubscription } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class OpcUaSubscriptionComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    opcSubscriptionForm: FormGroup;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(subscriptions: OpcUaSubscription[]): void;
    get opcSubscriptionArray(): FormArray;
    get opcSubscriptionArrayControls(): FormGroup[];
    addSubscriptionTag(emitEvent?: boolean): void;
    private createFormGroup;
    removeSubscriptionTag(index: number): void;
    private updateModels;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcUaSubscriptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcUaSubscriptionComponent, "tb-opc-ua-subscription", never, { "disabled": "disabled"; }, {}, never, never>;
}

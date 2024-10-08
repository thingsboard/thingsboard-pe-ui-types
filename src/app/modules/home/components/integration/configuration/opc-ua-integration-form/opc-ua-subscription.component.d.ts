import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { OpcUaSubscription } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class OpcUaSubscriptionComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    opcSubscriptionForm: UntypedFormGroup;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(subscriptions: OpcUaSubscription[]): void;
    get opcSubscriptionArray(): UntypedFormArray;
    get opcSubscriptionArrayControls(): UntypedFormGroup[];
    addSubscriptionTag(emitEvent?: boolean): void;
    private createFormGroup;
    removeSubscriptionTag(index: number): void;
    private updateModels;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcUaSubscriptionComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcUaSubscriptionComponent, "tb-opc-ua-subscription", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}

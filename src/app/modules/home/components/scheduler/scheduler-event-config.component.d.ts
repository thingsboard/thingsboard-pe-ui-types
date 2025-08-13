import { DestroyRef, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { SchedulerEventConfiguration } from '@shared/models/scheduler-event.models';
import { SchedulerEventConfigType } from '@home/components/scheduler/scheduler-event-config.models';
import * as i0 from "@angular/core";
export declare class SchedulerEventConfigComponent implements ControlValueAccessor, OnInit, OnChanges, Validator {
    private fb;
    private destroyRef;
    schedulerEventConfigFormGroup: UntypedFormGroup;
    modelValue: SchedulerEventConfiguration | null;
    disabled: boolean;
    schedulerEventConfigTypes: {
        [eventType: string]: SchedulerEventConfigType;
    };
    schedulerEventType: string;
    useDefinedTemplate: boolean;
    showOriginator: boolean;
    showMsgType: boolean;
    showMetadata: boolean;
    private clearMsgBody;
    private clearMetadata;
    private clearMsgType;
    private clearOriginator;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private buildSchedulerEventConfigForm;
    setDisabledState(isDisabled: boolean): void;
    private updateEnabledState;
    writeValue(value: SchedulerEventConfiguration | null): void;
    updateView(): void;
    validate(_control: AbstractControl): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SchedulerEventConfigComponent, "tb-scheduler-event-config", never, { "disabled": { "alias": "disabled"; "required": false; }; "schedulerEventConfigTypes": { "alias": "schedulerEventConfigTypes"; "required": false; }; "schedulerEventType": { "alias": "schedulerEventType"; "required": false; }; }, {}, never, never, false, never>;
}

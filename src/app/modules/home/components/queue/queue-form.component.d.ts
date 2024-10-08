import { OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { UtilsService } from '@core/services/utils.service';
import { QueueInfo, QueueProcessingStrategyTypes, QueueSubmitStrategyTypes } from '@shared/models/queue.models';
import * as i0 from "@angular/core";
export declare class QueueFormComponent implements ControlValueAccessor, OnInit, OnDestroy, Validator {
    private utils;
    private fb;
    disabled: boolean;
    newQueue: boolean;
    systemQueue: boolean;
    queueFormGroup: UntypedFormGroup;
    hideBatchSize: boolean;
    queueSubmitStrategyTypes: typeof QueueSubmitStrategyTypes;
    queueProcessingStrategyTypes: typeof QueueProcessingStrategyTypes;
    submitStrategies: string[];
    processingStrategies: string[];
    queueSubmitStrategyTypesMap: Map<QueueSubmitStrategyTypes, import("@shared/models/queue.models").QueueStrategyData>;
    queueProcessingStrategyTypesMap: Map<QueueProcessingStrategyTypes, import("@shared/models/queue.models").QueueStrategyData>;
    private modelValue;
    private propagateChange;
    private propagateChangePending;
    private valueChange$;
    constructor(utils: UtilsService, fb: UntypedFormBuilder);
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnInit(): void;
    ngOnDestroy(): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: QueueInfo): void;
    validate(c: UntypedFormControl): {
        queue: {
            valid: boolean;
        };
    };
    private updateModel;
    submitStrategyTypeChanged(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueueFormComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<QueueFormComponent, "tb-queue-form", never, { "disabled": { "alias": "disabled"; "required": false; }; "newQueue": { "alias": "newQueue"; "required": false; }; "systemQueue": { "alias": "systemQueue"; "required": false; }; }, {}, never, never, false, never>;
}

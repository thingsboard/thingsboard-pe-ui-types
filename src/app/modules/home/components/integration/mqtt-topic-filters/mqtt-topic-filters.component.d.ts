import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { MqttQos, MqttTopicFilter } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class MqttTopicFiltersComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    mqttTopicFiltersForm: FormGroup;
    mqttQosTypes: (string | MqttQos)[];
    MqttQosTranslation: Map<MqttQos, string>;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    writeValue(value: MqttTopicFilter[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    get mqttFiltersFromArray(): FormArray;
    addTopicFilter(): void;
    private updateModel;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttTopicFiltersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttTopicFiltersComponent, "tb-mqtt-topic-filters", never, { "disabled": "disabled"; }, {}, never, never>;
}

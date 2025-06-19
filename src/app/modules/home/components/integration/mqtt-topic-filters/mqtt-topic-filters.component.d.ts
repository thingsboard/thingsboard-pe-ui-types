import { OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { MqttQos, MqttTopicFilter } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class MqttTopicFiltersComponent implements ControlValueAccessor, Validator, OnDestroy, OnChanges {
    private fb;
    mqttTopicFiltersForm: UntypedFormGroup;
    mqttQosTypes: (string | MqttQos)[];
    MqttQosTranslation: Map<MqttQos, string>;
    disabled: boolean;
    excludeQos: MqttQos[];
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    writeValue(value: MqttTopicFilter[]): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    get mqttFiltersFromArray(): UntypedFormArray;
    addTopicFilter(): void;
    private updateModel;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttTopicFiltersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttTopicFiltersComponent, "tb-mqtt-topic-filters", never, { "disabled": { "alias": "disabled"; "required": false; }; "excludeQos": { "alias": "excludeQos"; "required": false; }; }, {}, never, never, false, never>;
}

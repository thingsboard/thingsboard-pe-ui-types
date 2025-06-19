import { OnChanges, SimpleChanges } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SubscriptSizing, MatFormFieldAppearance } from '@angular/material/form-field';
import { MqttVersion } from '@shared/models/mqtt.models';
import * as i0 from "@angular/core";
export declare class MqttVersionSelectComponent implements ControlValueAccessor, OnChanges {
    disabled: boolean;
    subscriptSizing: SubscriptSizing;
    appearance: MatFormFieldAppearance;
    excludeVersions: MqttVersion[];
    mqttVersions: MqttVersion[];
    mqttVersionTranslation: Map<MqttVersion, string>;
    modelValue: MqttVersion;
    required: boolean;
    private propagateChange;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MqttVersion | null): void;
    mqttVersionChanged(): void;
    private updateView;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttVersionSelectComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttVersionSelectComponent, "tb-mqtt-version-select", never, { "disabled": { "alias": "disabled"; "required": false; }; "subscriptSizing": { "alias": "subscriptSizing"; "required": false; }; "appearance": { "alias": "appearance"; "required": false; }; "excludeVersions": { "alias": "excludeVersions"; "required": false; }; "required": { "alias": "required"; "required": false; }; }, {}, never, never, false, never>;
}

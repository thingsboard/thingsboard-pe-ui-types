import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { RPCTemplateConfigMQTT } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class MqttRpcParametersComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    rpcParametersFormGroup: UntypedFormGroup;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: (value: RPCTemplateConfigMQTT) => void): void;
    registerOnTouched(fn: () => void): void;
    validate(): ValidationErrors | null;
    writeValue(value: RPCTemplateConfigMQTT): void;
    private observeValueChanges;
    private observeWithResponse;
    private toggleResponseFields;
    static ɵfac: i0.ɵɵFactoryDeclaration<MqttRpcParametersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MqttRpcParametersComponent, "tb-mqtt-rpc-parameters", never, {}, {}, never, never, true, never>;
}

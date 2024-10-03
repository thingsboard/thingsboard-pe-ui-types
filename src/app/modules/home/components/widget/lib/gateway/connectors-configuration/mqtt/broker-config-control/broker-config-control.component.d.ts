import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { BrokerConfig, PortLimits } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class BrokerConfigControlComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    private cdr;
    brokerConfigFormGroup: UntypedFormGroup;
    mqttVersions: {
        name: number;
        value: number;
    }[];
    portLimits: typeof PortLimits;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    generate(formControlName: string): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(brokerConfig: BrokerConfig): void;
    validate(): ValidationErrors | null;
    static ɵfac: i0.ɵɵFactoryDeclaration<BrokerConfigControlComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<BrokerConfigControlComponent, "tb-broker-config-control", never, {}, {}, never, never, true, never>;
}

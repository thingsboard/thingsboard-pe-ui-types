import { ChangeDetectorRef, OnChanges, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { ModbusSecurity } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class ModbusSecurityConfigComponent implements ControlValueAccessor, Validator, OnChanges, OnDestroy {
    private fb;
    private cdr;
    isMaster: boolean;
    securityConfigFormGroup: UntypedFormGroup;
    private disabled;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder, cdr: ChangeDetectorRef);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: (value: ModbusSecurity) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    validate(): ValidationErrors | null;
    writeValue(securityConfig: ModbusSecurity): void;
    private updateMasterEnabling;
    private observeValueChanges;
    static ɵfac: i0.ɵɵFactoryDeclaration<ModbusSecurityConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ModbusSecurityConfigComponent, "tb-modbus-security-config", never, { "isMaster": { "alias": "isMaster"; "required": false; }; }, {}, never, never, true, never>;
}

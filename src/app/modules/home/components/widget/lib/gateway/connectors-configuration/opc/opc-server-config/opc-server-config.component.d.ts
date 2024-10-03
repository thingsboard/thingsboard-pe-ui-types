import { AfterViewInit, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { SecurityPolicy, ServerConfig } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class OpcServerConfigComponent implements ControlValueAccessor, Validator, AfterViewInit, OnDestroy {
    private fb;
    hideNewFields: boolean;
    securityPolicyTypes: {
        value: SecurityPolicy;
        name: string;
    }[];
    serverConfigFormGroup: UntypedFormGroup;
    onChange: (value: string) => void;
    onTouched: () => void;
    private destroy$;
    constructor(fb: FormBuilder);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    validate(): ValidationErrors | null;
    writeValue(serverConfig: ServerConfig): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcServerConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcServerConfigComponent, "tb-opc-server-config", never, { "hideNewFields": "hideNewFields"; }, {}, never, never, true, never>;
}

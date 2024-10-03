import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { RestSecurityType } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class RestConnectorSecurityComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    BrokerSecurityType: typeof RestSecurityType;
    securityTypes: RestSecurityType[];
    SecurityTypeTranslationsMap: Map<RestSecurityType, string>;
    securityFormGroup: UntypedFormGroup;
    private destroy$;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(deviceInfo: any): void;
    validate(): ValidationErrors | null;
    private updateView;
    private updateValidators;
    private observeSecurityForm;
    static ɵfac: i0.ɵɵFactoryDeclaration<RestConnectorSecurityComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RestConnectorSecurityComponent, "tb-rest-connector-security", never, {}, {}, never, never, true, never>;
}

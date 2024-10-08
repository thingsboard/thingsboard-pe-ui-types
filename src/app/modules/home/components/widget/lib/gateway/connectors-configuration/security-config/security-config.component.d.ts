import { ChangeDetectorRef, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors } from '@angular/forms';
import { SecurityType, ModeType, ConnectorSecurity } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class SecurityConfigComponent implements ControlValueAccessor, OnInit, OnDestroy {
    private fb;
    private cdr;
    title: string;
    extendCertificatesModel: boolean;
    BrokerSecurityType: typeof SecurityType;
    securityTypes: SecurityType[];
    modeTypes: ModeType[];
    SecurityTypeTranslationsMap: Map<SecurityType, string>;
    securityFormGroup: UntypedFormGroup;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder, cdr: ChangeDetectorRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    writeValue(securityInfo: ConnectorSecurity): void;
    validate(): ValidationErrors | null;
    registerOnChange(fn: (value: string) => void): void;
    registerOnTouched(fn: () => void): void;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecurityConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SecurityConfigComponent, "tb-security-config", never, { "title": { "alias": "title"; "required": false; }; "extendCertificatesModel": { "alias": "extendCertificatesModel"; "required": false; }; }, {}, never, never, true, never>;
}

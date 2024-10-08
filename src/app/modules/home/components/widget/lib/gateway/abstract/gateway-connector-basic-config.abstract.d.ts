import { AfterViewInit, EventEmitter, OnDestroy, TemplateRef } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
export declare abstract class GatewayConnectorBasicConfigDirective<InputBasicConfig, OutputBasicConfig> implements AfterViewInit, ControlValueAccessor, Validator, OnDestroy {
    generalTabContent: TemplateRef<any>;
    initialized: EventEmitter<void>;
    basicFormGroup: FormGroup;
    protected fb: FormBuilder;
    protected onChange: (value: OutputBasicConfig) => void;
    protected onTouched: () => void;
    protected destroy$: Subject<void>;
    constructor();
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    validate(): ValidationErrors | null;
    registerOnChange(fn: (value: OutputBasicConfig) => void): void;
    registerOnTouched(fn: () => void): void;
    writeValue(config: OutputBasicConfig): void;
    protected onBasicFormGroupChange(value: InputBasicConfig): void;
    protected abstract mapConfigToFormValue(config: OutputBasicConfig): InputBasicConfig;
    protected abstract getMappedValue(config: InputBasicConfig): OutputBasicConfig;
    protected abstract initBasicFormGroup(): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<GatewayConnectorBasicConfigDirective<any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GatewayConnectorBasicConfigDirective<any, any>, never, never, { "generalTabContent": { "alias": "generalTabContent"; "required": false; }; }, { "initialized": "initialized"; }, never, never, false, never>;
}

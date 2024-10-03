import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { MappingValueType, OPCTypeValue, RPCTemplateConfigOPC } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class OpcRpcParametersComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    private cdr;
    rpcParametersFormGroup: UntypedFormGroup;
    readonly valueTypeKeys: MappingValueType[];
    readonly MappingValueType: typeof MappingValueType;
    readonly valueTypes: Map<MappingValueType, import("../../../../../../../../../shared/public-api").ValueTypeData>;
    private onChange;
    private onTouched;
    private destroy$;
    constructor(fb: FormBuilder, cdr: ChangeDetectorRef);
    ngOnDestroy(): void;
    registerOnChange(fn: (value: RPCTemplateConfigOPC) => void): void;
    registerOnTouched(fn: () => void): void;
    validate(): ValidationErrors | null;
    writeValue(params: RPCTemplateConfigOPC): void;
    private observeValueChanges;
    removeArgument(index: number): void;
    addArgument(value?: OPCTypeValue): void;
    clearArguments(): void;
    private observeTypeChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcRpcParametersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcRpcParametersComponent, "tb-opc-rpc-parameters", never, {}, {}, never, never, true, never>;
}

import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormGroup, ValidationErrors, Validator } from '@angular/forms';
import { OpcMappingType, OpcUaMapping } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class OpcUaMappingComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    opcMappingForm: UntypedFormGroup;
    OpcMappingTypes: OpcMappingType[];
    OpcMappingType: typeof OpcMappingType;
    OpcMappingTypeTranslation: Map<OpcMappingType, string>;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(mappings: OpcUaMapping[]): void;
    validate(): ValidationErrors | null;
    addMap(): void;
    removeMap(index: number): void;
    get mapFormArray(): UntypedFormArray;
    get mapFormArrayControls(): UntypedFormGroup[];
    private createdFormGroup;
    private updateModels;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcUaMappingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcUaMappingComponent, "tb-opc-ua-mapping", never, { "disabled": "disabled"; }, {}, never, never, false>;
}

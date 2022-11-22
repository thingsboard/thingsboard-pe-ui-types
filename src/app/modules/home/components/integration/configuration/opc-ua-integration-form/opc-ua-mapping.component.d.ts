import { OnDestroy } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, ValidationErrors, Validator } from '@angular/forms';
import { OpcMappingType, OpcUaMapping } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class OpcUaMappingComponent implements ControlValueAccessor, Validator, OnDestroy {
    private fb;
    opcMappingForm: FormGroup;
    OpcMappingTypes: OpcMappingType[];
    OpcMappingType: typeof OpcMappingType;
    OpcMappingTypeTranslation: Map<OpcMappingType, string>;
    disabled: boolean;
    private destroy$;
    private propagateChange;
    constructor(fb: FormBuilder);
    ngOnDestroy(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(mappings: OpcUaMapping[]): void;
    validate(): ValidationErrors | null;
    addMap(): void;
    removeMap(index: number): void;
    get mapFormArray(): FormArray;
    get mapFormArrayControls(): FormGroup[];
    private createdFormGroup;
    private updateModels;
    static ɵfac: i0.ɵɵFactoryDeclaration<OpcUaMappingComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OpcUaMappingComponent, "tb-opc-ua-mapping", never, { "disabled": "disabled"; }, {}, never, never>;
}

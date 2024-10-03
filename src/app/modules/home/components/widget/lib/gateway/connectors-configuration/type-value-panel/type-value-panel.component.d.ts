import { OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, ValidationErrors, Validator } from '@angular/forms';
import { MappingDataKey, MappingValueType } from '@home/components/widget/lib/gateway/gateway-widget.models';
import * as i0 from "@angular/core";
export declare class TypeValuePanelComponent implements ControlValueAccessor, Validator, OnInit, OnDestroy {
    private fb;
    valueTypeKeys: MappingValueType[];
    valueTypes: Map<MappingValueType, import("../../../../../../../../shared/public-api").ValueTypeData>;
    valueListFormArray: UntypedFormArray;
    readonly MappingValueType: typeof MappingValueType;
    private destroy$;
    private propagateChange;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    trackByKey(_: number, keyControl: AbstractControl): any;
    addKey(): void;
    private observeTypeChange;
    deleteKey($event: Event, index: number): void;
    valueTitle(value: any): string;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    writeValue(deviceInfoArray: Array<MappingDataKey>): void;
    validate(): ValidationErrors | null;
    private updateView;
    static ɵfac: i0.ɵɵFactoryDeclaration<TypeValuePanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TypeValuePanelComponent, "tb-type-value-panel", never, {}, {}, never, never, false, never>;
}

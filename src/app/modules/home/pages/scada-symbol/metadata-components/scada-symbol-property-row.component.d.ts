import { ChangeDetectorRef, ElementRef, EventEmitter, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { ScadaSymbolProperty, ScadaSymbolPropertyType } from '@home/components/widget/lib/scada/scada-symbol.models';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { ScadaSymbolPropertiesComponent } from '@home/pages/scada-symbol/metadata-components/scada-symbol-properties.component';
import * as i0 from "@angular/core";
export declare const propertyValid: (property: ScadaSymbolProperty) => boolean;
export declare const defaultPropertyValue: (type: ScadaSymbolPropertyType) => any;
export declare class ScadaSymbolPropertyRowComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private cd;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private propertiesComponent;
    idInput: ElementRef<HTMLInputElement>;
    editButton: MatButton;
    scadaSymbolPropertyTypes: ScadaSymbolPropertyType[];
    scadaSymbolPropertyTypeTranslations: Map<ScadaSymbolPropertyType, string>;
    disabled: boolean;
    index: number;
    booleanPropertyIds: string[];
    propertyRemoved: EventEmitter<any>;
    propertyRowFormGroup: UntypedFormGroup;
    modelValue: ScadaSymbolProperty;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, propertiesComponent: ScadaSymbolPropertiesComponent);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: ScadaSymbolProperty): void;
    editProperty($event: Event, matButton: MatButton, add?: boolean, editCanceled?: () => void): void;
    focus(): void;
    onAdd(onCanceled: () => void): void;
    validate(c: UntypedFormControl): {
        propertyIdNotUnique: boolean;
        property?: undefined;
    } | {
        property: boolean;
        propertyIdNotUnique?: undefined;
    };
    private propertyIdValidator;
    private onTypeChanged;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<ScadaSymbolPropertyRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ScadaSymbolPropertyRowComponent, "tb-scada-symbol-metadata-property-row", never, { "disabled": { "alias": "disabled"; "required": false; }; "index": { "alias": "index"; "required": false; }; "booleanPropertyIds": { "alias": "booleanPropertyIds"; "required": false; }; }, { "propertyRemoved": "propertyRemoved"; }, never, never, false, never>;
}

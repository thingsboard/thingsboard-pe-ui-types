import { ChangeDetectorRef, DestroyRef, ElementRef, EventEmitter, OnInit, Renderer2, ViewContainerRef } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { TbPopoverService } from '@shared/components/popover.service';
import { FormProperty, FormPropertyType } from '@shared/models/dynamic-form.models';
import { DynamicFormPropertiesComponent } from '@home/components/widget/lib/settings/common/dynamic-form/dynamic-form-properties.component';
import * as i0 from "@angular/core";
export declare class DynamicFormPropertyRowComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private cd;
    private popoverService;
    private renderer;
    private viewContainerRef;
    private propertiesComponent;
    private destroyRef;
    idInput: ElementRef<HTMLInputElement>;
    editButton: MatButton;
    formPropertyTypes: FormPropertyType[];
    formPropertyTypeTranslations: Map<FormPropertyType, string>;
    disabled: boolean;
    index: number;
    booleanPropertyIds: string[];
    propertyRemoved: EventEmitter<any>;
    propertyRowFormGroup: UntypedFormGroup;
    modelValue: FormProperty;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, cd: ChangeDetectorRef, popoverService: TbPopoverService, renderer: Renderer2, viewContainerRef: ViewContainerRef, propertiesComponent: DynamicFormPropertiesComponent, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: FormProperty): void;
    editProperty($event: Event, matButton: MatButton, add?: boolean, editCanceled?: () => void): void;
    focus(): void;
    onAdd(onCanceled: () => void): void;
    validate(_c: UntypedFormControl): {
        propertyIdNotUnique: boolean;
        property?: undefined;
    } | {
        property: boolean;
        propertyIdNotUnique?: undefined;
    };
    private propertyIdValidator;
    private onTypeChanged;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<DynamicFormPropertyRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DynamicFormPropertyRowComponent, "tb-dynamic-form-property-row", never, { "disabled": { "alias": "disabled"; "required": false; }; "index": { "alias": "index"; "required": false; }; "booleanPropertyIds": { "alias": "booleanPropertyIds"; "required": false; }; }, { "propertyRemoved": "propertyRemoved"; }, never, never, false, never>;
}

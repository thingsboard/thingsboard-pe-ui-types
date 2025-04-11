import { DestroyRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { MapLayerSettings } from '@shared/models/widget/maps/map.models';
import * as i0 from "@angular/core";
export declare class MapLayersComponent implements ControlValueAccessor, OnInit, Validator {
    private fb;
    private destroyRef;
    disabled: boolean;
    layersFormGroup: UntypedFormGroup;
    get dragEnabled(): boolean;
    private propagateChange;
    constructor(fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MapLayerSettings[] | undefined): void;
    validate(c: UntypedFormControl): {
        layers: {
            valid: boolean;
        };
    };
    layerDrop(event: CdkDragDrop<string[]>): void;
    layersFormArray(): UntypedFormArray;
    trackByLayer(index: number, layerControl: AbstractControl): any;
    removeLayer(index: number): void;
    addLayer(): void;
    private prepareLayersFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapLayersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapLayersComponent, "tb-map-layers", never, { "disabled": { "alias": "disabled"; "required": false; }; }, {}, never, never, false, never>;
}

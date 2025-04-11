import { DestroyRef, OnInit } from '@angular/core';
import { AbstractControl, ControlValueAccessor, UntypedFormArray, UntypedFormBuilder, UntypedFormControl, UntypedFormGroup, Validator } from '@angular/forms';
import { MapDataLayerSettings, MapDataLayerType, MapType } from '@shared/models/widget/maps/map.models';
import { MapSettingsComponent } from '@home/components/widget/lib/settings/common/map/map-settings.component';
import { MapSettingsContext } from '@home/components/widget/lib/settings/common/map/map-settings.component.models';
import * as i0 from "@angular/core";
export declare class MapDataLayersComponent implements ControlValueAccessor, OnInit, Validator {
    private mapSettingsComponent;
    private fb;
    private destroyRef;
    MapType: typeof MapType;
    disabled: boolean;
    mapType: MapType;
    dataLayerType: MapDataLayerType;
    context: MapSettingsContext;
    dataLayersFormGroup: UntypedFormGroup;
    addDataLayerText: string;
    noDataLayersText: string;
    private propagateChange;
    constructor(mapSettingsComponent: MapSettingsComponent, fb: UntypedFormBuilder, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MapDataLayerSettings[] | undefined): void;
    validate(c: UntypedFormControl): {
        dataLayers: {
            valid: boolean;
        };
    };
    dataLayersFormArray(): UntypedFormArray;
    trackByDataLayer(index: number, dataLayerControl: AbstractControl): any;
    removeDataLayer(index: number): void;
    addDataLayer(): void;
    private prepareDataLayersFormArray;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapDataLayersComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapDataLayersComponent, "tb-map-data-layers", never, { "disabled": { "alias": "disabled"; "required": false; }; "mapType": { "alias": "mapType"; "required": false; }; "dataLayerType": { "alias": "dataLayerType"; "required": false; }; "context": { "alias": "context"; "required": false; }; }, {}, never, never, false, never>;
}

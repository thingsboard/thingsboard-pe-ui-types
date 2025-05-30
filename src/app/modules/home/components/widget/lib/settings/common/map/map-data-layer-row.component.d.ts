import { ChangeDetectorRef, DestroyRef, EventEmitter, OnInit } from '@angular/core';
import { ControlValueAccessor, UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MapDataLayerSettings, MapDataLayerType, MapType } from '@shared/models/widget/maps/map.models';
import { DatasourceType, widgetType } from '@shared/models/widget.models';
import { EntityType } from '@shared/models/entity-type.models';
import { DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { MapSettingsComponent } from '@home/components/widget/lib/settings/common/map/map-settings.component';
import { MatDialog } from '@angular/material/dialog';
import { MapSettingsContext } from '@home/components/widget/lib/settings/common/map/map-settings.component.models';
import * as i0 from "@angular/core";
export declare class MapDataLayerRowComponent implements ControlValueAccessor, OnInit {
    private mapSettingsComponent;
    private fb;
    private dialog;
    private cd;
    private destroyRef;
    DatasourceType: typeof DatasourceType;
    DataKeyType: typeof DataKeyType;
    EntityType: typeof EntityType;
    MapType: typeof MapType;
    widgetType: typeof widgetType;
    datasourceTypes: Array<DatasourceType>;
    datasourceTypesTranslations: Map<DatasourceType, string>;
    disabled: boolean;
    mapType: MapType;
    dataLayerType: MapDataLayerType;
    context: MapSettingsContext;
    dataLayerRemoved: EventEmitter<any>;
    dataLayerFormGroup: UntypedFormGroup;
    modelValue: MapDataLayerSettings;
    editDataLayerText: string;
    removeDataLayerText: string;
    private propagateChange;
    constructor(mapSettingsComponent: MapSettingsComponent, fb: UntypedFormBuilder, dialog: MatDialog, cd: ChangeDetectorRef, destroyRef: DestroyRef);
    ngOnInit(): void;
    registerOnChange(fn: any): void;
    registerOnTouched(_fn: any): void;
    setDisabledState(isDisabled: boolean): void;
    writeValue(value: MapDataLayerSettings): void;
    editKey(keyType: 'xKey' | 'yKey' | 'polygonKey' | 'circleKey'): void;
    editDataLayer($event: Event, matButton: MatButton): void;
    private onDsTypeChanged;
    private updateValidators;
    private updateModel;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapDataLayerRowComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapDataLayerRowComponent, "tb-map-data-layer-row", never, { "disabled": { "alias": "disabled"; "required": false; }; "mapType": { "alias": "mapType"; "required": false; }; "dataLayerType": { "alias": "dataLayerType"; "required": false; }; "context": { "alias": "context"; "required": false; }; }, { "dataLayerRemoved": "dataLayerRemoved"; }, never, never, false, never>;
}

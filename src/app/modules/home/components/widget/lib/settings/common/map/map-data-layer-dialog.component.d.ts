import { DestroyRef } from '@angular/core';
import { DialogComponent } from '@shared/components/dialog.component';
import { DataLayerEditAction, MapDataLayerSettings, MapDataLayerType, MapType, MarkerType, ShapeFillType } from '@shared/models/widget/maps/map.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, UntypedFormGroup } from '@angular/forms';
import { DatasourceType, widgetType } from '@shared/models/widget.models';
import { AttributeScope, DataKeyType } from '@shared/models/telemetry/telemetry.models';
import { EntityType } from '@shared/models/entity-type.models';
import { MapSettingsContext } from '@home/components/widget/lib/settings/common/map/map-settings.component.models';
import { WidgetService } from '@core/http/widget.service';
import * as i0 from "@angular/core";
export interface MapDataLayerDialogData {
    settings: MapDataLayerSettings;
    mapType: MapType;
    dataLayerType: MapDataLayerType;
    context: MapSettingsContext;
}
export declare class MapDataLayerDialogComponent extends DialogComponent<MapDataLayerDialogComponent, MapDataLayerSettings> {
    protected store: Store<AppState>;
    protected router: Router;
    data: MapDataLayerDialogData;
    dialogRef: MatDialogRef<MapDataLayerDialogComponent, MapDataLayerSettings>;
    private fb;
    private widgetService;
    private destroyRef;
    DatasourceType: typeof DatasourceType;
    EntityType: typeof EntityType;
    MapType: typeof MapType;
    DataKeyType: typeof DataKeyType;
    AttributeScope: typeof AttributeScope;
    telemetryTypeTranslationsShort: Map<import("@shared/models/telemetry/telemetry.models").TelemetryType, string>;
    widgetType: typeof widgetType;
    MarkerType: typeof MarkerType;
    ShapeFillType: typeof ShapeFillType;
    datasourceTypes: Array<DatasourceType>;
    datasourceTypesTranslations: Map<DatasourceType, string>;
    dataLayerEditTitle: string;
    dataLayerEditActions: Array<DataLayerEditAction>;
    dataLayerEditActionTranslationMap: Map<DataLayerEditAction, string>;
    pathDecoratorSymbols: import("@shared/models/widget/maps/map.models").PathDecoratorSymbol[];
    pathDecoratorSymbolTranslationMap: Map<import("@shared/models/widget/maps/map.models").PathDecoratorSymbol, string>;
    dataLayerFormGroup: UntypedFormGroup;
    settings: MapDataLayerSettings;
    mapType: MapType;
    dataLayerType: MapDataLayerType;
    context: MapSettingsContext;
    generateAdditionalDataKey: any;
    functionScopeVariables: string[];
    dialogTitle: string;
    get labelHelpId(): string;
    get tooltipHelpId(): string;
    get showEditAttributeScope(): boolean;
    constructor(store: Store<AppState>, router: Router, data: MapDataLayerDialogData, dialogRef: MatDialogRef<MapDataLayerDialogComponent, MapDataLayerSettings>, fb: FormBuilder, widgetService: WidgetService, destroyRef: DestroyRef);
    private onDsTypeChanged;
    private updateValidators;
    private updateMarkerTypeValidators;
    private updateFillTypeValidators;
    editKey(keyType: 'xKey' | 'yKey' | 'polygonKey' | 'circleKey'): void;
    private generateDataKey;
    cancel(): void;
    save(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<MapDataLayerDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MapDataLayerDialogComponent, "tb-map-data-layer-dialog", never, {}, {}, never, never, false, never>;
}

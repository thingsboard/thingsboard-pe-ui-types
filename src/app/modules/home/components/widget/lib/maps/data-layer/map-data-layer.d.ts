import { DataLayerColorSettings, DataLayerPatternSettings, MapDataLayerSettings, MapDataLayerType, MapType, TbMapDatasource } from '@shared/models/widget/maps/map.models';
import L from 'leaflet';
import { Observable } from 'rxjs';
import { DataKey, FormattedData } from '@shared/models/widget.models';
import { TbMap } from '@home/components/widget/lib/maps/map';
import { WidgetContext } from '@home/models/widget-component.models';
import { ColorRange } from '@shared/models/widget-settings.models';
export declare class DataLayerPatternProcessor {
    private dataLayer;
    private settings;
    private patternFunction;
    private pattern;
    constructor(dataLayer: TbMapDataLayer, settings: DataLayerPatternSettings);
    setup(): Observable<void>;
    processPattern(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]): string;
}
export declare class DataLayerColorProcessor {
    private dataLayer;
    private settings;
    private colorFunction;
    private color;
    private rangeKey;
    private range;
    constructor(dataLayer: TbMapDataLayer, settings: DataLayerColorSettings);
    setup(): Observable<void>;
    processColor(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]): string;
    static constantRange(range: ColorRange): boolean;
}
export declare abstract class TbDataLayerItem<S extends MapDataLayerSettings = MapDataLayerSettings, D extends TbMapDataLayer = TbMapDataLayer, L extends L.Layer = L.Layer> {
    protected settings: S;
    protected dataLayer: D;
    protected layer: L;
    protected constructor(settings: S, dataLayer: D);
    getLayer(): L;
    getDataLayer(): D;
    abstract remove(): void;
    abstract invalidateCoordinates(): void;
}
export declare abstract class TbMapDataLayer<S extends MapDataLayerSettings = MapDataLayerSettings, I extends TbDataLayerItem = any> {
    protected map: TbMap<any>;
    protected settings: S;
    protected dataSources: TbMapDatasource[];
    protected mapDataId: string;
    protected dataLayerContainer: L.FeatureGroup;
    protected layerItems: Map<string, I>;
    protected groupsState: {
        [group: string]: boolean;
    };
    protected enabled: boolean;
    protected snappable: boolean;
    dataLayerLabelProcessor: DataLayerPatternProcessor;
    dataLayerTooltipProcessor: DataLayerPatternProcessor;
    protected constructor(map: TbMap<any>, inputSettings: S);
    setup(): Observable<any>;
    removeItem(key: string): void;
    invalidateCoordinates(): void;
    getCtx(): WidgetContext;
    getMap(): TbMap<any>;
    mapType(): MapType;
    getDataSources(): TbMapDatasource[];
    getDataLayerContainer(): L.FeatureGroup;
    getBounds(): L.LatLngBounds;
    isEnabled(): boolean;
    getGroups(): string[];
    toggleGroup(group: string): boolean;
    hasData(data: FormattedData<TbMapDatasource>): boolean;
    protected createDataLayerContainer(): L.FeatureGroup;
    protected calculateDataKeys(): DataKey[];
    protected calculateLatestDataKeys(): DataKey[];
    protected getDataKeys(): DataKey[];
    protected allColorSettings(): DataLayerColorSettings[];
    protected onDataLayerEnabled(): void;
    protected onDataLayerDisabled(): void;
    abstract dataLayerType(): MapDataLayerType;
    protected abstract defaultBaseSettings(map: TbMap<any>): Partial<S>;
    protected abstract doSetup(): Observable<any>;
}

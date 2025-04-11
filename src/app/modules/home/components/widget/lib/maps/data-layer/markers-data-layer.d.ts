import { DataLayerColorSettings, MapDataLayerType, MarkerIconInfo, MarkersDataLayerSettings, TbMapDatasource } from '@shared/models/widget/maps/map.models';
import L, { FeatureGroup } from 'leaflet';
import { DataKey, FormattedData } from '@shared/models/widget.models';
import { Observable } from 'rxjs';
import tinycolor from 'tinycolor2';
import { TbMap } from '@home/components/widget/lib/maps/map';
import { MarkerIconContainer, MarkerShape } from '@shared/models/widget/maps/marker-shape.models';
import { TbLatestDataLayerItem, TbLatestMapDataLayer, UnplacedMapDataItem } from '@home/components/widget/lib/maps/data-layer/latest-map-data-layer';
import { TbMapDataLayer } from '@home/components/widget/lib/maps/data-layer/map-data-layer';
export declare class MarkerDataProcessor<S extends MarkersDataLayerSettings = MarkersDataLayerSettings> {
    dataLayer: TbMapDataLayer;
    private settings;
    markerOffset: L.LatLngTuple;
    tooltipOffset: L.LatLngTuple;
    private positionFunction;
    private markerIconProcessor;
    constructor(dataLayer: TbMapDataLayer, settings: S, markerOffset: L.LatLngTuple, tooltipOffset: L.LatLngTuple);
    setup(): Observable<any>;
    extractLocation(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]): L.LatLng;
    extractLocationData(data: FormattedData<TbMapDatasource>): {
        x: number;
        y: number;
    };
    createMarkerIcon(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[], rotationAngle?: number): Observable<MarkerIconInfo>;
    createDefaultMarkerIcon(rotationAngle?: number): Observable<MarkerIconInfo>;
    createColoredMarkerShape(shape: MarkerShape, color: tinycolor.Instance, rotationAngle?: number, size?: number): Observable<MarkerIconInfo>;
    createColoredMarkerIcon(iconContainer: MarkerIconContainer, icon: string, color: tinycolor.Instance, rotationAngle?: number, size?: number): Observable<MarkerIconInfo>;
}
declare class TbMarkerDataLayerItem extends TbLatestDataLayerItem<MarkersDataLayerSettings, TbMarkersDataLayer, L.Marker> {
    protected settings: MarkersDataLayerSettings;
    protected dataLayer: TbMarkersDataLayer;
    private marker;
    private labelOffset;
    private iconClassList;
    private moving;
    private dragStart;
    private dragEnd;
    constructor(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[], settings: MarkersDataLayerSettings, dataLayer: TbMarkersDataLayer);
    isEditing(): boolean;
    updateBubblingMouseEvents(): void;
    protected create(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]): L.Marker;
    protected unbindLabel(): void;
    protected bindLabel(content: L.Content): void;
    protected doUpdate(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]): void;
    protected doInvalidateCoordinates(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]): void;
    protected addItemClass(clazz: string): void;
    protected removeItemClass(clazz: string): void;
    protected enableDrag(): void;
    protected disableDrag(): void;
    protected removeDataItemTitle(): string;
    protected removeDataItem(): Observable<any>;
    private _dragStart;
    private _dragEnd;
    private saveMarkerLocation;
    private updateMarkerLocation;
    private updateMarkerIcon;
    private updateIconClasses;
}
export declare class TbMarkersDataLayer extends TbLatestMapDataLayer<MarkersDataLayerSettings, TbMarkersDataLayer> {
    protected map: TbMap<any>;
    dataProcessor: MarkerDataProcessor;
    markerOffset: L.LatLngTuple;
    tooltipOffset: L.LatLngTuple;
    private markersClusterContainer;
    private clusterMarkerColorFunction;
    constructor(map: TbMap<any>, inputSettings: MarkersDataLayerSettings);
    dataLayerType(): MapDataLayerType;
    placeItem(item: UnplacedMapDataItem, layer: L.Layer): void;
    saveMarkerLocation(data: FormattedData<TbMapDatasource>, position: L.LatLng): Observable<{
        x: number;
        y: number;
    }>;
    protected createDataLayerContainer(): FeatureGroup;
    protected getDataKeys(): DataKey[];
    protected allColorSettings(): DataLayerColorSettings[];
    protected defaultBaseSettings(map: TbMap<any>): Partial<MarkersDataLayerSettings>;
    protected doSetup(): Observable<void>;
    protected isValidLayerData(layerData: FormattedData<TbMapDatasource>): boolean;
    protected createLayerItem(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]): TbMarkerDataLayerItem;
    protected layerItemsUpdated(updatedItems: TbLatestDataLayerItem<MarkersDataLayerSettings, TbMarkersDataLayer, L.Marker>[]): void;
    private createMarkersClusterContainer;
}
export {};

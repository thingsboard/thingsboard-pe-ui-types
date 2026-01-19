import { DataLayerColorSettings, MapDataLayerType, TbMapDatasource, TripsDataLayerSettings } from '@shared/models/widget/maps/map.models';
import { Observable } from 'rxjs';
import { DataKey, FormattedData } from '@shared/models/widget.models';
import L from 'leaflet';
import { TbMap } from '@home/components/widget/lib/maps/map';
import { DataLayerColorProcessor, DataLayerPatternProcessor, TbDataLayerItem, TbMapDataLayer } from '@home/components/widget/lib/maps/data-layer/map-data-layer';
import { MarkerDataProcessor } from '@home/components/widget/lib/maps/data-layer/markers-data-layer';
export interface PointItem {
    point: L.CircleMarker;
    tooltip?: L.Popup;
}
declare class TbTripDataItem extends TbDataLayerItem<TripsDataLayerSettings, TbTripsDataLayer, L.FeatureGroup> {
    private rawRouteData;
    private latestData;
    private tripRouteData;
    private marker;
    private markerTooltip;
    private labelOffset;
    private polyline;
    private polylineDecorator;
    private pointsContainer;
    private points;
    private currentTime;
    private currentPositionData;
    private pointData;
    constructor(rawRouteData: FormattedData<TbMapDatasource>[], latestData: FormattedData<TbMapDatasource>, settings: TripsDataLayerSettings, dataLayer: TbTripsDataLayer);
    update(rawRouteData: FormattedData<TbMapDatasource>[]): void;
    updateLatestData(latestData: FormattedData<TbMapDatasource>): void;
    updateAppearance(): void;
    updateCurrentTime(): void;
    invalidateCoordinates(): void;
    remove(): void;
    calculateAnchors(): number[];
    private create;
    private createMarker;
    private updateMarker;
    private createPath;
    private updatePath;
    private updatePoints;
    private updatePathAppearance;
    private updateMarkerLocation;
    private updateMarkerIcon;
    private updateMarkerLabel;
    private prepareTripRouteData;
    private updateCurrentPosition;
}
export declare class TbTripsDataLayer extends TbMapDataLayer<TripsDataLayerSettings, TbTripDataItem> {
    protected map: TbMap<any>;
    dataProcessor: MarkerDataProcessor;
    markerOffset: L.LatLngTuple;
    tooltipOffset: L.LatLngTuple;
    pathStrokeColorProcessor: DataLayerColorProcessor;
    pointColorProcessor: DataLayerColorProcessor;
    pointTooltipProcessor: DataLayerPatternProcessor;
    private rawTripsData;
    private latestTripsData;
    constructor(map: TbMap<any>, inputSettings: TripsDataLayerSettings);
    dataLayerType(): MapDataLayerType;
    showMarker(): boolean;
    prepareTripsData(tripsData: FormattedData<TbMapDatasource>[][], tripsLatestData: FormattedData<TbMapDatasource>[]): {
        minTime: number;
        maxTime: number;
    };
    updateTrips(): void;
    updateTripsLatestData(tripsLatestData: FormattedData<TbMapDatasource>[]): void;
    updateCurrentTime(): void;
    updateAppearance(): void;
    calculateAnchors(): number[];
    getPathStyle(data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]): L.PolylineOptions;
    getPathDecoratorStyle(pathStroke: string): L.PolylineDecoratorOptions;
    protected calculateDataKeys(): DataKey[];
    protected calculateLatestDataKeys(): DataKey[];
    protected allColorSettings(): DataLayerColorSettings[];
    protected defaultBaseSettings(map: TbMap<any>): Partial<TripsDataLayerSettings>;
    protected doSetup(): Observable<void>;
    private clearIncorrectFirsLastDatapoint;
    private findFirstHistoricalDataIndexCoordinate;
}
export {};

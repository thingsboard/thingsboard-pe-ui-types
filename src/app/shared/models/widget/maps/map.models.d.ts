import { DataKey, Datasource, DatasourceType, FormattedData, WidgetAction } from '@shared/models/widget.models';
import { AttributeScope } from '@shared/models/telemetry/telemetry.models';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import type L from 'leaflet';
import { TbFunction } from '@shared/models/js-function.models';
import { Observable } from 'rxjs';
import { ImagePipe } from '@shared/pipe/image.pipe';
import { MarkerIconContainer, MarkerShape } from '@shared/models/widget/maps/marker-shape.models';
import { ColorRange, DateFormatSettings } from '@shared/models/widget-settings.models';
export declare enum MapType {
    geoMap = "geoMap",
    image = "image"
}
export interface MapDataSourceSettings {
    dsType: DatasourceType;
    dsLabel?: string;
    dsDeviceId?: string;
    dsEntityAliasId?: string;
    dsFilterId?: string;
}
export interface TbMapDatasource extends Datasource {
    mapDataIds: string[];
}
export declare const mapDataSourceSettingsToDatasource: (settings: MapDataSourceSettings | MapDataLayerSettings, id?: string, includeDataKeys?: boolean, dataLayerType?: MapDataLayerType) => TbMapDatasource;
export declare enum DataLayerPatternType {
    pattern = "pattern",
    function = "function"
}
export interface DataLayerPatternSettings {
    show: boolean;
    type: DataLayerPatternType;
    pattern?: string;
    patternFunction?: TbFunction;
}
export declare enum DataLayerTooltipTrigger {
    click = "click",
    hover = "hover"
}
export declare const dataLayerTooltipTriggers: DataLayerTooltipTrigger[];
export declare const dataLayerTooltipTriggerTranslationMap: Map<DataLayerTooltipTrigger, string>;
export interface DataLayerTooltipSettings extends DataLayerPatternSettings {
    trigger: DataLayerTooltipTrigger;
    autoclose: boolean;
    offsetX: number;
    offsetY: number;
    tagActions?: WidgetAction[];
}
export declare enum DataLayerEditAction {
    add = "add",
    edit = "edit",
    move = "move",
    remove = "remove"
}
export declare const dataLayerEditActions: DataLayerEditAction[];
export declare const dataLayerEditActionTranslationMap: Map<DataLayerEditAction, string>;
export interface DataLayerEditSettings {
    enabledActions: DataLayerEditAction[];
    attributeScope: AttributeScope;
    snappable: boolean;
}
export interface MapDataLayerSettings extends MapDataSourceSettings {
    additionalDataSources?: MapDataSourceSettings[];
    additionalDataKeys?: DataKey[];
    label: DataLayerPatternSettings;
    tooltip: DataLayerTooltipSettings;
    click: WidgetAction;
    groups?: string[];
    edit: DataLayerEditSettings;
}
export declare const defaultBaseDataLayerSettings: (mapType: MapType) => Partial<MapDataLayerSettings>;
export type MapDataLayerType = 'trips' | 'markers' | 'polygons' | 'circles' | 'polylines';
export declare const mapDataLayerTypes: MapDataLayerType[];
export declare const mapDataLayerValid: (dataLayer: MapDataLayerSettings, type: MapDataLayerType) => boolean;
export declare const mapDataLayerValidator: (type: MapDataLayerType) => ValidatorFn;
export declare enum MarkerType {
    shape = "shape",
    icon = "icon",
    image = "image"
}
export declare enum DataLayerColorType {
    constant = "constant",
    range = "range",
    function = "function"
}
export interface DataLayerColorSettings {
    type: DataLayerColorType;
    color: string;
    rangeKey?: DataKey;
    range?: ColorRange[];
    colorFunction?: TbFunction;
}
export declare enum MarkerImageType {
    image = "image",
    function = "function"
}
export interface MarkerImageSettings {
    type: MarkerImageType;
    image?: string;
    imageSize?: number;
    imageFunction?: TbFunction;
    images?: string[];
}
export interface BaseMarkerShapeSettings {
    size: number;
    color: DataLayerColorSettings;
}
export interface MarkerShapeSettings extends BaseMarkerShapeSettings {
    shape: MarkerShape;
}
export interface MarkerIconSettings extends BaseMarkerShapeSettings {
    iconContainer?: MarkerIconContainer;
    icon: string;
}
export interface MarkerClusteringSettings {
    enable: boolean;
    zoomOnClick: boolean;
    maxZoom: number;
    maxClusterRadius: number;
    zoomAnimation: boolean;
    showCoverageOnHover: boolean;
    spiderfyOnMaxZoom: boolean;
    chunkedLoad: boolean;
    lazyLoad: boolean;
    useClusterMarkerColorFunction: boolean;
    clusterMarkerColorFunction: TbFunction;
}
export interface MarkersDataLayerSettings extends MapDataLayerSettings {
    xKey: DataKey;
    yKey: DataKey;
    markerType: MarkerType;
    markerShape?: MarkerShapeSettings;
    markerIcon?: MarkerIconSettings;
    markerImage?: MarkerImageSettings;
    markerOffsetX: number;
    markerOffsetY: number;
    positionFunction?: TbFunction;
    markerClustering: MarkerClusteringSettings;
}
export declare const defaultMarkersDataLayerSettings: (mapType: MapType, functionsOnly?: boolean) => MarkersDataLayerSettings;
export declare const defaultBaseMarkersDataLayerSettings: (mapType: MapType) => Partial<MarkersDataLayerSettings>;
export declare enum PathDecoratorSymbol {
    arrowHead = "arrowHead",
    dash = "dash"
}
export declare const pathDecoratorSymbols: PathDecoratorSymbol[];
export declare const pathDecoratorSymbolTranslationMap: Map<PathDecoratorSymbol, string>;
export interface TripsDataLayerSettings extends MarkersDataLayerSettings {
    showMarker: boolean;
    rotateMarker: boolean;
    offsetAngle: number;
    showPath: boolean;
    pathStrokeWeight?: number;
    pathStrokeColor?: DataLayerColorSettings;
    usePathDecorator?: boolean;
    pathDecoratorSymbol?: PathDecoratorSymbol;
    pathDecoratorSymbolSize?: number;
    pathDecoratorSymbolColor?: string;
    pathDecoratorOffset?: number;
    pathEndDecoratorOffset?: number;
    pathDecoratorRepeat?: number;
    showPoints: boolean;
    pointSize?: number;
    pointColor?: DataLayerColorSettings;
    pointTooltip?: DataLayerTooltipSettings;
}
export declare const defaultTripsDataLayerSettings: (mapType: MapType, functionsOnly?: boolean) => TripsDataLayerSettings;
export declare const defaultBaseTripsDataLayerSettings: (mapType: MapType) => Partial<TripsDataLayerSettings>;
export declare enum ShapeFillType {
    color = "color",
    image = "image",
    stripe = "stripe"
}
export declare enum ShapeFillImageType {
    image = "image",
    function = "function"
}
export interface ShapeFillImageSettings {
    type: ShapeFillImageType;
    image?: string;
    preserveAspectRatio?: boolean;
    opacity?: number;
    angle?: number;
    scale?: number;
    imageFunction?: TbFunction;
    images?: string[];
}
export interface ShapeFillStripeSettings {
    weight: number;
    color: DataLayerColorSettings;
    spaceWeight: number;
    spaceColor: DataLayerColorSettings;
    angle: number;
}
export interface ShapeDataLayerSettings extends MapDataLayerSettings {
    fillType: ShapeFillType;
    fillColor?: DataLayerColorSettings;
    fillImage?: ShapeFillImageSettings;
    fillStripe?: ShapeFillStripeSettings;
    strokeColor: DataLayerColorSettings;
    strokeWeight: number;
}
export interface PolygonsDataLayerSettings extends ShapeDataLayerSettings {
    polygonKey: DataKey;
}
export declare const defaultPolygonsDataLayerSettings: (mapType: MapType, functionsOnly?: boolean) => PolygonsDataLayerSettings;
export declare const defaultBasePolygonsDataLayerSettings: (mapType: MapType) => Partial<PolygonsDataLayerSettings>;
export interface CirclesDataLayerSettings extends ShapeDataLayerSettings {
    circleKey: DataKey;
}
export declare const defaultCirclesDataLayerSettings: (mapType: MapType, functionsOnly?: boolean) => CirclesDataLayerSettings;
export declare const defaultBaseCirclesDataLayerSettings: (mapType: MapType) => Partial<CirclesDataLayerSettings>;
export interface PolylinesDataLayerSettings extends ShapeDataLayerSettings {
    polylineKey: DataKey;
}
export declare const defaultPolylinesDataLayerSettings: (mapType: MapType, functionsOnly?: boolean) => PolylinesDataLayerSettings;
export declare const defaultBasePolylinesDataLayerSettings: (mapType: MapType) => Partial<PolylinesDataLayerSettings>;
export declare const defaultMapDataLayerSettings: (mapType: MapType, dataLayerType: MapDataLayerType, functionsOnly?: boolean) => MapDataLayerSettings;
export declare const defaultBaseMapDataLayerSettings: <T extends MapDataLayerSettings>(mapType: MapType, dataLayerType: MapDataLayerType) => T;
export interface AdditionalMapDataSourceSettings extends MapDataSourceSettings {
    dataKeys: DataKey[];
}
export declare const additionalMapDataSourcesToDatasources: (additionalMapDataSources: AdditionalMapDataSourceSettings[], includeDataKeys?: boolean) => TbMapDatasource[];
export declare const mapDataSourceValid: (dataSource: MapDataSourceSettings) => boolean;
export declare const mapDataSourceValidator: ValidatorFn;
export declare const defaultMapDataSourceSettings: {
    dsType: DatasourceType;
    dsLabel: string;
};
export declare const additionalMapDataSourceValid: (dataSource: AdditionalMapDataSourceSettings) => boolean;
export declare const additionalMapDataSourceValidator: ValidatorFn;
export declare const defaultAdditionalMapDataSourceSettings: (functionsOnly?: boolean) => AdditionalMapDataSourceSettings;
export declare enum MapControlsPosition {
    topleft = "topleft",
    topright = "topright",
    bottomleft = "bottomleft",
    bottomright = "bottomright"
}
export declare const mapControlPositions: MapControlsPosition[];
export declare const mapControlsPositionTranslationMap: Map<MapControlsPosition, string>;
export declare enum MapZoomAction {
    scroll = "scroll",
    doubleClick = "doubleClick",
    controlButtons = "controlButtons"
}
export declare const mapZoomActions: MapZoomAction[];
export declare const mapZoomActionTranslationMap: Map<MapZoomAction, string>;
export declare enum MapScale {
    metric = "metric",
    imperial = "imperial"
}
export declare const mapScales: MapScale[];
export declare const mapScaleTranslationMap: Map<MapScale, string>;
export interface MapActionButtonSettings {
    label?: string;
    icon?: string;
    color: string;
    action: WidgetAction;
}
export interface TripTimelineSettings {
    showTimelineControl: boolean;
    timeStep: number;
    speedOptions: number[];
    showTimestamp: boolean;
    timestampFormat: DateFormatSettings;
    snapToRealLocation: boolean;
    locationSnapFilter: TbFunction;
}
export interface BaseMapSettings {
    mapType: MapType;
    trips?: TripsDataLayerSettings[];
    markers: MarkersDataLayerSettings[];
    polygons: PolygonsDataLayerSettings[];
    circles: CirclesDataLayerSettings[];
    polylines: PolylinesDataLayerSettings[];
    additionalDataSources: AdditionalMapDataSourceSettings[];
    controlsPosition: MapControlsPosition;
    zoomActions: MapZoomAction[];
    scales: MapScale[];
    dragModeButton: boolean;
    fitMapBounds: boolean;
    useDefaultCenterPosition: boolean;
    defaultCenterPosition?: string;
    defaultZoomLevel: number;
    minZoomLevel: number;
    mapPageSize: number;
    mapActionButtons: MapActionButtonSettings[];
    tripTimeline?: TripTimelineSettings;
}
export declare const DEFAULT_MAP_PAGE_SIZE = 16384;
export declare const DEFAULT_ZOOM_LEVEL = 8;
export declare const defaultBaseMapSettings: BaseMapSettings;
export declare const defaultMapActionButtonSettings: MapActionButtonSettings;
export declare enum MapProvider {
    openstreet = "openstreet",
    google = "google",
    here = "here",
    tencent = "tencent",
    custom = "custom"
}
export declare const mapProviders: MapProvider[];
export declare const mapProviderTranslationMap: Map<MapProvider, string>;
export declare enum ReferenceLayerType {
    openstreetmap_hybrid = "openstreetmap_hybrid",
    world_edition_hybrid = "world_edition_hybrid",
    enhanced_contrast_hybrid = "enhanced_contrast_hybrid"
}
export declare const referenceLayerTypes: ReferenceLayerType[];
export declare const referenceLayerTypeTranslationMap: Map<ReferenceLayerType, string>;
export interface MapLayerSettings {
    label?: string;
    provider: MapProvider;
    referenceLayer?: ReferenceLayerType;
}
export declare const mapLayerValid: (layer: MapLayerSettings) => boolean;
export declare const mapLayerValidator: (control: AbstractControl) => ValidationErrors | null;
export declare const defaultLayerTitle: (layer: MapLayerSettings) => string;
export declare enum OpenStreetLayerType {
    openStreetMapnik = "OpenStreetMap.Mapnik",
    openStreetHot = "OpenStreetMap.HOT",
    esriWorldStreetMap = "Esri.WorldStreetMap",
    esriWorldTopoMap = "Esri.WorldTopoMap",
    esriWorldImagery = "Esri.WorldImagery",
    cartoDbPositron = "CartoDB.Positron",
    cartoDbDarkMatter = "CartoDB.DarkMatter"
}
export declare const openStreetLayerTypes: OpenStreetLayerType[];
export declare const openStreetMapLayerTranslationMap: Map<OpenStreetLayerType, string>;
export interface OpenStreetMapLayerSettings extends MapLayerSettings {
    provider: MapProvider.openstreet;
    layerType: OpenStreetLayerType;
}
export declare const defaultOpenStreetMapLayerSettings: OpenStreetMapLayerSettings;
export declare enum GoogleLayerType {
    roadmap = "roadmap",
    satellite = "satellite",
    hybrid = "hybrid",
    terrain = "terrain"
}
export declare const googleMapLayerTypes: GoogleLayerType[];
export declare const googleMapLayerTranslationMap: Map<GoogleLayerType, string>;
export interface GoogleMapLayerSettings extends MapLayerSettings {
    provider: MapProvider.google;
    layerType: GoogleLayerType;
    apiKey: string;
}
export declare const defaultGoogleMapLayerSettings: GoogleMapLayerSettings;
export declare enum HereLayerType {
    hereNormalDay = "HEREv3.normalDay",
    hereNormalNight = "HEREv3.normalNight",
    hereHybridDay = "HEREv3.hybridDay",
    hereTerrainDay = "HEREv3.terrainDay"
}
export declare const hereLayerTypes: HereLayerType[];
export declare const hereLayerTranslationMap: Map<HereLayerType, string>;
export interface HereMapLayerSettings extends MapLayerSettings {
    provider: MapProvider.here;
    layerType: HereLayerType;
    apiKey: string;
}
export declare const defaultHereMapLayerSettings: HereMapLayerSettings;
export declare enum TencentLayerType {
    tencentNormal = "Tencent.Normal",
    tencentSatellite = "Tencent.Satellite",
    tencentTerrain = "Tencent.Terrain"
}
export declare const tencentLayerTypes: TencentLayerType[];
export declare const tencentLayerTranslationMap: Map<TencentLayerType, string>;
export interface TencentMapLayerSettings extends MapLayerSettings {
    provider: MapProvider.tencent;
    layerType: TencentLayerType;
}
export declare const defaultTencentMapLayerSettings: TencentMapLayerSettings;
export interface CustomMapLayerSettings extends MapLayerSettings {
    provider: MapProvider.custom;
    tileUrl: string;
}
export declare const defaultCustomMapLayerSettings: CustomMapLayerSettings;
export declare const defaultMapLayerSettings: (provider: MapProvider) => MapLayerSettings;
export declare const defaultMapLayers: MapLayerSettings[];
export interface GeoMapSettings extends BaseMapSettings {
    layers?: MapLayerSettings[];
}
export declare const defaultGeoMapSettings: GeoMapSettings;
export declare enum ImageSourceType {
    image = "image",
    entityKey = "entityKey"
}
export interface ImageMapSourceSettings {
    sourceType: ImageSourceType;
    url?: string;
    entityAliasId?: string;
    entityKey?: DataKey;
}
export declare const imageMapSourceSettingsValid: (imageSource: ImageMapSourceSettings) => boolean;
export declare const imageMapSourceSettingsValidator: ValidatorFn;
export declare const defaultImageMapSourceSettings: ImageMapSourceSettings;
export declare const imageMapSourceSettingsToDatasource: (settings: ImageMapSourceSettings) => Datasource;
export interface ImageMapSettings extends BaseMapSettings {
    imageSource?: ImageMapSourceSettings;
}
export declare const defaultImageMapSettings: ImageMapSettings;
export type MapSetting = GeoMapSettings & ImageMapSettings;
export declare const defaultMapSettings: MapSetting;
export interface MarkerImageInfo {
    url: string;
    size: number;
    markerOffset?: [number, number];
    tooltipOffset?: [number, number];
}
export interface MarkerIconInfo {
    icon: L.Icon<L.BaseIconOptions>;
    size: [number, number];
}
export interface ShapeFillImageInfo {
    url: string;
    preserveAspectRatio?: boolean;
    opacity?: number;
    angle?: number;
    scale?: number;
}
export type MapStringFunction = (data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]) => string;
export type MapBooleanFunction = (data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[]) => boolean;
export type MarkerImageFunction = (data: FormattedData<TbMapDatasource>, markerImages: string[], dsData: FormattedData<TbMapDatasource>[]) => MarkerImageInfo;
export type ClusterMarkerColorFunction = (data: FormattedData<TbMapDatasource>[], childCount: number) => string;
export type MarkerPositionFunction = (origXPos: number, origYPos: number, data: FormattedData<TbMapDatasource>, dsData: FormattedData<TbMapDatasource>[], aspect: number) => {
    x: number;
    y: number;
};
export type ShapeFillImageFunction = (data: FormattedData<TbMapDatasource>, images: string[], dsData: FormattedData<TbMapDatasource>[]) => ShapeFillImageInfo;
export type TbPolygonRawCoordinate = L.LatLngTuple | L.LatLngTuple[] | L.LatLngTuple[][];
export type TbPolygonRawCoordinates = TbPolygonRawCoordinate[];
export type TbPolyData = L.LatLngTuple[] | L.LatLngTuple[][] | L.LatLngTuple[][][];
export type TbPolygonCoordinate = L.LatLng | L.LatLng[] | L.LatLng[][];
export type TbPolygonCoordinates = TbPolygonCoordinate[];
export type TbPolylineRawCoordinate = L.LatLngTuple | L.LatLngTuple[] | L.LatLngTuple[][];
export type TbPolylineRawCoordinates = TbPolylineRawCoordinate[];
export type TbPolylineData = L.LatLngTuple[] | L.LatLngTuple[][] | L.LatLngTuple[][][];
export type TbPolylineCoordinate = L.LatLng | L.LatLng[] | L.LatLng[][];
export type TbPolylineCoordinates = TbPolylineCoordinate[];
export interface TbCircleData {
    latitude: number;
    longitude: number;
    radius: number;
}
export type DataKeyValuePair = {
    dataKey: DataKey;
    value: any;
};
export declare const isJSON: (data: string) => boolean;
export declare const isValidLatitude: (latitude: any) => boolean;
export declare const isValidLongitude: (longitude: any) => boolean;
export declare const isValidLatLng: (latitude: any, longitude: any) => boolean;
export declare const isCutPolygon: (data: TbPolygonCoordinates | TbPolygonRawCoordinates) => boolean;
export declare const parseCenterPosition: (position: string | [number, number]) => [number, number];
export declare const updateDataKeyToNewDsType: (dataKey: DataKey | null, newDsType: DatasourceType, timeSeries?: boolean) => boolean;
export declare const mergeMapDatasources: (target: TbMapDatasource[], source: TbMapDatasource[]) => TbMapDatasource[];
export declare const loadImageSize: (imageUrl: string) => Observable<[number, number]>;
export interface ImageWithAspect {
    url: string;
    width: number;
    height: number;
    aspect: number;
}
export declare const loadImageWithAspect: (imagePipe: ImagePipe, imageUrl: string) => Observable<ImageWithAspect>;
export declare const processTooltipTemplate: (template: string) => string;
export declare const calculateNewPointCoordinate: (coordinate: number, imageSize: number) => number;
export declare const latLngPointToBounds: (point: L.LatLng, southWest: L.LatLng, northEast: L.LatLng, offset?: number) => L.LatLng;
export type TripRouteData = {
    [time: number]: FormattedData<TbMapDatasource>;
};
export declare const calculateInterpolationRatio: (firsMoment: number, secondMoment: number, intermediateMoment: number) => number;
export declare const interpolateLineSegment: (pointA: FormattedData, pointB: FormattedData, xKey: string, yKey: string, ratio: number) => {
    [key: string]: number;
};
export declare const findRotationAngle: (startPoint: L.LatLng, endPoint: L.LatLng) => number;
export declare const calculateLastPoints: (routeData: TripRouteData, time: number) => FormattedData<TbMapDatasource>;

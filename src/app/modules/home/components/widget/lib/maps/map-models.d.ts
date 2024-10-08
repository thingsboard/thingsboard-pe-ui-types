import { Datasource, FormattedData } from '@app/shared/models/widget.models';
import tinycolor from 'tinycolor2';
import { BaseIconOptions, Icon } from 'leaflet';
import { Observable } from 'rxjs';
export declare const DEFAULT_MAP_PAGE_SIZE = 16384;
export declare const DEFAULT_ZOOM_LEVEL = 8;
export type MarkerImageInfo = {
    url: string;
    size: number;
    markerOffset?: [number, number];
    tooltipOffset?: [number, number];
};
export type MarkerIconInfo = {
    icon: Icon<BaseIconOptions>;
    size: [number, number];
};
export interface MapImage {
    imageUrl: string;
    aspect: number;
    update?: boolean;
}
export type actionsHandler = ($event: Event, datasource: Datasource) => void;
export interface CircleData {
    latitude: number;
    longitude: number;
    radius: number;
}
export type GenericFunction = (data: FormattedData, dsData: FormattedData[], dsIndex: number) => string;
export type MarkerImageFunction = (data: FormattedData, markerImages: string[], dsData: FormattedData[], dsIndex: number) => MarkerImageInfo;
export type PosFunction = (origXPos: number, origYPos: number, data: FormattedData, dsData: FormattedData[], dsIndex: number, aspect: number) => {
    x: number;
    y: number;
};
export type MarkerIconReadyFunction = (icon: MarkerIconInfo) => void;
export declare enum GoogleMapType {
    roadmap = "roadmap",
    satellite = "satellite",
    hybrid = "hybrid",
    terrain = "terrain"
}
export declare const googleMapTypeProviderTranslationMap: Map<GoogleMapType, string>;
export interface GoogleMapProviderSettings {
    gmApiKey: string;
    gmDefaultMapType: GoogleMapType;
}
export declare const defaultGoogleMapProviderSettings: GoogleMapProviderSettings;
export declare enum OpenStreetMapProvider {
    openStreetMapnik = "OpenStreetMap.Mapnik",
    openStreetHot = "OpenStreetMap.HOT",
    esriWorldStreetMap = "Esri.WorldStreetMap",
    esriWorldTopoMap = "Esri.WorldTopoMap",
    esriWorldImagery = "Esri.WorldImagery",
    cartoDbPositron = "CartoDB.Positron",
    cartoDbDarkMatter = "CartoDB.DarkMatter"
}
export declare const openStreetMapProviderTranslationMap: Map<OpenStreetMapProvider, string>;
export interface OpenStreetMapProviderSettings {
    mapProvider: OpenStreetMapProvider;
    useCustomProvider: boolean;
    customProviderTileUrl?: string;
}
export declare const defaultOpenStreetMapProviderSettings: OpenStreetMapProviderSettings;
export declare enum HereMapProvider {
    hereNormalDay = "HERE.normalDay",
    hereNormalNight = "HERE.normalNight",
    hereHybridDay = "HERE.hybridDay",
    hereTerrainDay = "HERE.terrainDay"
}
export declare const hereMapProviderTranslationMap: Map<HereMapProvider, string>;
export interface HereMapProviderSettings {
    mapProviderHere: HereMapProvider;
    credentials: {
        useV3: boolean;
        app_id: string;
        app_code: string;
        apiKey: string;
    };
}
export declare const defaultHereMapProviderSettings: HereMapProviderSettings;
export interface ImageMapProviderSettings {
    mapImageUrl?: string;
    imageEntityAlias?: string;
    imageUrlAttribute?: string;
}
export declare const defaultImageMapProviderSettings: ImageMapProviderSettings;
export declare enum TencentMapType {
    roadmap = "roadmap",
    satellite = "satellite",
    hybrid = "hybrid"
}
export declare const tencentMapTypeProviderTranslationMap: Map<TencentMapType, string>;
export interface TencentMapProviderSettings {
    tmApiKey: string;
    tmDefaultMapType: TencentMapType;
}
export declare const defaultTencentMapProviderSettings: TencentMapProviderSettings;
export declare enum MapProviders {
    google = "google-map",
    openstreet = "openstreet-map",
    here = "here",
    image = "image-map",
    tencent = "tencent-map"
}
export declare const mapProviderTranslationMap: Map<MapProviders, string>;
export interface MapProviderSettings extends GoogleMapProviderSettings, OpenStreetMapProviderSettings, HereMapProviderSettings, ImageMapProviderSettings, TencentMapProviderSettings {
    provider: MapProviders;
}
export declare const defaultMapProviderSettings: MapProviderSettings;
export interface CommonMapSettings {
    latKeyName: string;
    lngKeyName: string;
    xPosKeyName: string;
    yPosKeyName: string;
    defaultZoomLevel: number;
    defaultCenterPosition?: string;
    disableScrollZooming: boolean;
    disableDoubleClickZooming: boolean;
    disableZoomControl: boolean;
    fitMapBounds: boolean;
    useDefaultCenterPosition: boolean;
    mapPageSize: number;
}
export interface WidgetCommonMapSettings extends CommonMapSettings {
    parsedDefaultCenterPosition: [number, number];
    minZoomLevel: number;
}
export interface WidgetToolipSettings {
    tooltipAction: {
        [name: string]: actionsHandler;
    };
}
export declare const defaultCommonMapSettings: CommonMapSettings;
export interface TripAnimationCommonSettings {
    normalizationStep: number;
    latKeyName: string;
    lngKeyName: string;
    showTooltip: boolean;
    tooltipColor: string;
    tooltipFontColor: string;
    tooltipOpacity: number;
    useTooltipFunction: boolean;
    tooltipPattern?: string;
    tooltipFunction?: string;
    autocloseTooltip: boolean;
}
export interface WidgetTripAnimationCommonSettings extends TripAnimationCommonSettings {
    parsedTooltipFunction: GenericFunction;
}
export declare const defaultTripAnimationCommonSettings: TripAnimationCommonSettings;
export declare enum ShowTooltipAction {
    click = "click",
    hover = "hover"
}
export declare const showTooltipActionTranslationMap: Map<ShowTooltipAction, string>;
export interface MarkersSettings {
    markerOffsetX: number;
    markerOffsetY: number;
    posFunction?: string;
    draggableMarker: boolean;
    showLabel: boolean;
    useLabelFunction: boolean;
    label?: string;
    labelFunction?: string;
    showTooltip: boolean;
    showTooltipAction: ShowTooltipAction;
    autocloseTooltip: boolean;
    useTooltipFunction: boolean;
    tooltipPattern?: string;
    tooltipFunction?: string;
    tooltipOffsetX: number;
    tooltipOffsetY: number;
    color?: string;
    useColorFunction: boolean;
    colorFunction?: string;
    useMarkerImageFunction: boolean;
    markerImage?: string;
    markerImageSize?: number;
    markerImageFunction?: string;
    markerImages?: string[];
}
export interface WidgetMarkersSettings extends MarkersSettings, WidgetToolipSettings {
    parsedLabelFunction: GenericFunction;
    parsedTooltipFunction: GenericFunction;
    parsedColorFunction: GenericFunction;
    parsedMarkerImageFunction: MarkerImageFunction;
    markerClick: {
        [name: string]: actionsHandler;
    };
    currentImage: MarkerImageInfo;
    tinyColor: tinycolor.Instance;
    icon: MarkerIconInfo;
    icon$?: Observable<MarkerIconInfo>;
}
export declare const defaultMarkersSettings: MarkersSettings;
export interface TripAnimationMarkerSettings {
    rotationAngle: number;
    showLabel: boolean;
    useLabelFunction: boolean;
    label?: string;
    labelFunction?: string;
    useMarkerImageFunction: boolean;
    markerImage?: string;
    markerImageSize?: number;
    markerImageFunction?: string;
    markerImages?: string[];
}
export interface WidgetTripAnimationMarkerSettings extends TripAnimationMarkerSettings {
    parsedLabelFunction: GenericFunction;
    parsedMarkerImageFunction: MarkerImageFunction;
}
export declare const defaultTripAnimationMarkersSettings: TripAnimationMarkerSettings;
export interface PolygonSettings {
    showPolygon: boolean;
    polygonKeyName: string;
    editablePolygon: boolean;
    showPolygonLabel: boolean;
    usePolygonLabelFunction: boolean;
    polygonLabel?: string;
    polygonLabelFunction?: string;
    showPolygonTooltip: boolean;
    showPolygonTooltipAction: ShowTooltipAction;
    autoClosePolygonTooltip: boolean;
    usePolygonTooltipFunction: boolean;
    polygonTooltipPattern?: string;
    polygonTooltipFunction?: string;
    polygonColor?: string;
    polygonOpacity?: number;
    usePolygonColorFunction: boolean;
    polygonColorFunction?: string;
    polygonStrokeColor?: string;
    polygonStrokeOpacity?: number;
    polygonStrokeWeight?: number;
    usePolygonStrokeColorFunction: boolean;
    polygonStrokeColorFunction?: string;
}
export interface WidgetPolygonSettings extends PolygonSettings, WidgetToolipSettings {
    parsedPolygonLabelFunction: GenericFunction;
    parsedPolygonTooltipFunction: GenericFunction;
    parsedPolygonColorFunction: GenericFunction;
    parsedPolygonStrokeColorFunction: GenericFunction;
    polygonClick: {
        [name: string]: actionsHandler;
    };
}
export declare const defaultPolygonSettings: PolygonSettings;
export interface CircleSettings {
    showCircle: boolean;
    circleKeyName: string;
    editableCircle: boolean;
    showCircleLabel: boolean;
    useCircleLabelFunction: boolean;
    circleLabel?: string;
    circleLabelFunction?: string;
    showCircleTooltip: boolean;
    showCircleTooltipAction: ShowTooltipAction;
    autoCloseCircleTooltip: boolean;
    useCircleTooltipFunction: boolean;
    circleTooltipPattern?: string;
    circleTooltipFunction?: string;
    circleFillColor?: string;
    circleFillColorOpacity?: number;
    useCircleFillColorFunction: boolean;
    circleFillColorFunction?: string;
    circleStrokeColor?: string;
    circleStrokeOpacity?: number;
    circleStrokeWeight?: number;
    useCircleStrokeColorFunction: boolean;
    circleStrokeColorFunction?: string;
}
export interface WidgetCircleSettings extends CircleSettings, WidgetToolipSettings {
    parsedCircleLabelFunction: GenericFunction;
    parsedCircleTooltipFunction: GenericFunction;
    parsedCircleFillColorFunction: GenericFunction;
    parsedCircleStrokeColorFunction: GenericFunction;
    circleClick: {
        [name: string]: actionsHandler;
    };
}
export declare const defaultCircleSettings: CircleSettings;
export declare enum PolylineDecoratorSymbol {
    arrowHead = "arrowHead",
    dash = "dash"
}
export declare const polylineDecoratorSymbolTranslationMap: Map<PolylineDecoratorSymbol, string>;
export interface PolylineSettings {
    useStrokeWeightFunction?: boolean;
    strokeWeight: number;
    strokeWeightFunction?: string;
    useStrokeOpacityFunction?: boolean;
    strokeOpacity: number;
    strokeOpacityFunction?: string;
    useColorFunction?: boolean;
    color?: string;
    colorFunction?: string;
    usePolylineDecorator?: boolean;
    decoratorSymbol?: PolylineDecoratorSymbol;
    decoratorSymbolSize?: number;
    useDecoratorCustomColor?: boolean;
    decoratorCustomColor?: string;
    decoratorOffset?: string;
    endDecoratorOffset?: string;
    decoratorRepeat?: string;
}
export interface WidgetPolylineSettings extends PolylineSettings {
    parsedColorFunction: GenericFunction;
    parsedStrokeOpacityFunction: GenericFunction;
    parsedStrokeWeightFunction: GenericFunction;
}
export declare const defaultRouteMapSettings: PolylineSettings;
export declare const defaultTripAnimationPathSettings: PolylineSettings;
export interface PointsSettings {
    showPoints?: boolean;
    pointColor?: string;
    useColorPointFunction?: false;
    colorPointFunction?: string;
    pointSize?: number;
    usePointAsAnchor?: false;
    pointAsAnchorFunction?: string;
    pointTooltipOnRightPanel?: boolean;
}
export interface WidgetPointsSettings extends PointsSettings {
    parsedColorPointFunction: GenericFunction;
    parsedPointAsAnchorFunction: GenericFunction;
}
export declare const defaultTripAnimationPointSettings: PointsSettings;
export interface MarkerClusteringSettings {
    useClusterMarkers: boolean;
    zoomOnClick: boolean;
    maxZoom: number;
    maxClusterRadius: number;
    animate: boolean;
    spiderfyOnMaxZoom: boolean;
    showCoverageOnHover: boolean;
    chunkedLoading: boolean;
    removeOutsideVisibleBounds: boolean;
    useIconCreateFunction: boolean;
    clusterMarkerFunction?: string;
}
export interface WidgetMarkerClusteringSettings extends MarkerClusteringSettings {
    parsedClusterMarkerFunction?: GenericFunction;
}
export declare const defaultMarkerClusteringSettings: MarkerClusteringSettings;
export interface MapEditorSettings {
    snappable: boolean;
    initDragMode: boolean;
    hideAllControlButton: boolean;
    hideDrawControlButton: boolean;
    hideEditControlButton: boolean;
    hideRemoveControlButton: boolean;
}
export declare const defaultMapEditorSettings: MapEditorSettings;
export type UnitedMapSettings = MapProviderSettings & CommonMapSettings & MarkersSettings & PolygonSettings & CircleSettings & PolylineSettings & PointsSettings & WidgetMarkerClusteringSettings & MapEditorSettings;
export declare const defaultMapSettings: UnitedMapSettings;
export type WidgetUnitedMapSettings = UnitedMapSettings & Partial<WidgetCommonMapSettings & WidgetMarkersSettings & WidgetPolygonSettings & WidgetCircleSettings & WidgetPolylineSettings & WidgetPointsSettings>;
export type UnitedTripAnimationSettings = MapProviderSettings & TripAnimationCommonSettings & TripAnimationMarkerSettings & PolylineSettings & PointsSettings & PolygonSettings & CircleSettings;
export declare const defaultTripAnimationSettings: UnitedTripAnimationSettings;
export interface HistorySelectSettings {
    buttonColor: string;
}
export type WidgetUnitedTripAnimationSettings = UnitedTripAnimationSettings & HistorySelectSettings & Partial<WidgetTripAnimationCommonSettings & WidgetTripAnimationMarkerSettings & WidgetPolylineSettings & WidgetPointsSettings & WidgetPolygonSettings & WidgetCircleSettings>;

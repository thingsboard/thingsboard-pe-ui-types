import { Datasource } from '@app/shared/models/widget.models';
import { EntityType } from '@shared/models/entity-type.models';
import tinycolor from 'tinycolor2';
import { BaseIconOptions, Icon } from 'leaflet';
export declare const DEFAULT_MAP_PAGE_SIZE = 16384;
export declare const DEFAULT_ZOOM_LEVEL = 8;
export declare type GenericFunction = (data: FormattedData, dsData: FormattedData[], dsIndex: number) => string;
export declare type MarkerImageFunction = (data: FormattedData, dsData: FormattedData[], dsIndex: number) => MarkerImageInfo;
export declare type PosFuncton = (origXPos: any, origYPos: any) => {
    x: any;
    y: any;
};
export declare type MarkerIconReadyFunction = (icon: MarkerIconInfo) => void;
export declare type MapSettings = {
    draggableMarker: boolean;
    editablePolygon: boolean;
    posFunction: PosFuncton;
    defaultZoomLevel?: number;
    disableScrollZooming?: boolean;
    disableZoomControl?: boolean;
    minZoomLevel?: number;
    useClusterMarkers: boolean;
    latKeyName?: string;
    lngKeyName?: string;
    xPosKeyName?: string;
    yPosKeyName?: string;
    imageEntityAlias: string;
    imageUrlAttribute: string;
    mapProvider: MapProviders;
    mapProviderHere: string;
    mapUrl?: string;
    mapImageUrl?: string;
    provider?: MapProviders;
    credentials?: any;
    gmApiKey?: string;
    defaultCenterPosition?: [number, number];
    markerClusteringSetting?: any;
    useDefaultCenterPosition?: boolean;
    gmDefaultMapType?: string;
    useLabelFunction: boolean;
    zoomOnClick: boolean;
    maxZoom: number;
    showCoverageOnHover: boolean;
    animate: boolean;
    maxClusterRadius: number;
    spiderfyOnMaxZoom: boolean;
    chunkedLoading: boolean;
    removeOutsideVisibleBounds: boolean;
    useCustomProvider: boolean;
    customProviderTileUrl: string;
    mapPageSize: number;
};
export declare enum MapProviders {
    google = "google-map",
    openstreet = "openstreet-map",
    here = "here",
    image = "image-map",
    tencent = "tencent-map"
}
export declare type MarkerImageInfo = {
    url: string;
    size: number;
    markerOffset?: [number, number];
    tooltipOffset?: [number, number];
};
export declare type MarkerIconInfo = {
    icon: Icon<BaseIconOptions>;
    size: [number, number];
};
export declare type MarkerSettings = {
    tooltipPattern?: any;
    tooltipAction: {
        [name: string]: actionsHandler;
    };
    icon?: MarkerIconInfo;
    showLabel?: boolean;
    label: string;
    labelColor: string;
    labelText: string;
    useLabelFunction: boolean;
    draggableMarker: boolean;
    showTooltip?: boolean;
    useTooltipFunction: boolean;
    useColorFunction: boolean;
    color?: string;
    tinyColor?: tinycolor.Instance;
    autocloseTooltip: boolean;
    showTooltipAction: string;
    useClusterMarkers: boolean;
    currentImage?: MarkerImageInfo;
    useMarkerImageFunction?: boolean;
    markerImages?: string[];
    markerImageSize: number;
    fitMapBounds: boolean;
    markerImage: string;
    markerClick: {
        [name: string]: actionsHandler;
    };
    colorFunction: GenericFunction;
    tooltipFunction: GenericFunction;
    labelFunction: GenericFunction;
    markerImageFunction?: MarkerImageFunction;
    markerOffsetX: number;
    markerOffsetY: number;
    tooltipOffsetX: number;
    tooltipOffsetY: number;
};
export interface FormattedData {
    $datasource: Datasource;
    entityName: string;
    entityId: string;
    entityType: EntityType;
    dsIndex: number;
    deviceType: string;
    [key: string]: any;
}
export interface ReplaceInfo {
    variable: string;
    valDec?: number;
    dataKeyName: string;
}
export declare type PolygonSettings = {
    showPolygon: boolean;
    polygonKeyName: string;
    polKeyName: string;
    polygonStrokeOpacity: number;
    polygonOpacity: number;
    polygonStrokeWeight: number;
    polygonStrokeColor: string;
    polygonColor: string;
    showPolygonLabel?: boolean;
    polygonLabel: string;
    polygonLabelColor: string;
    polygonLabelText: string;
    usePolygonLabelFunction: boolean;
    showPolygonTooltip: boolean;
    autoClosePolygonTooltip: boolean;
    showPolygonTooltipAction: string;
    tooltipAction: {
        [name: string]: actionsHandler;
    };
    polygonTooltipPattern: string;
    usePolygonTooltipFunction: boolean;
    polygonClick: {
        [name: string]: actionsHandler;
    };
    usePolygonColorFunction: boolean;
    usePolygonStrokeColorFunction: boolean;
    polygonTooltipFunction: GenericFunction;
    polygonColorFunction?: GenericFunction;
    polygonStrokeColorFunction?: GenericFunction;
    polygonLabelFunction?: GenericFunction;
    editablePolygon: boolean;
};
export interface CircleSettings {
    showCircle: boolean;
    circleKeyName: string;
    editableCircle: boolean;
    showCircleLabel: boolean;
    useCircleLabelFunction: boolean;
    circleLabel: string;
    circleLabelFunction?: GenericFunction;
    circleFillColor: string;
    useCircleFillColorFunction: boolean;
    circleFillColorFunction?: GenericFunction;
    circleFillColorOpacity: number;
    circleStrokeColor: string;
    useCircleStrokeColorFunction: boolean;
    circleStrokeColorFunction: GenericFunction;
    circleStrokeOpacity: number;
    circleStrokeWeight: number;
    showCircleTooltip: boolean;
    showCircleTooltipAction: string;
    autoCloseCircleTooltip: boolean;
    useCircleTooltipFunction: boolean;
    circleTooltipPattern: string;
    circleTooltipFunction?: GenericFunction;
    circleClick?: {
        [name: string]: actionsHandler;
    };
}
export declare type PolylineSettings = {
    usePolylineDecorator: any;
    autocloseTooltip: boolean;
    showTooltipAction: string;
    useColorFunction: any;
    tooltipAction: {
        [name: string]: actionsHandler;
    };
    color: string;
    useStrokeOpacityFunction: any;
    strokeOpacity: number;
    useStrokeWeightFunction: any;
    strokeWeight: number;
    decoratorOffset: string | number;
    endDecoratorOffset: string | number;
    decoratorRepeat: string | number;
    decoratorSymbol: any;
    decoratorSymbolSize: any;
    useDecoratorCustomColor: any;
    decoratorCustomColor: any;
    colorFunction: GenericFunction;
    strokeOpacityFunction: GenericFunction;
    strokeWeightFunction: GenericFunction;
};
export interface EditorSettings {
    snappable: boolean;
    initDragMode: boolean;
    hideAllControlButton: boolean;
    hideDrawControlButton: boolean;
    hideEditControlButton: boolean;
    hideRemoveControlButton: boolean;
}
export interface HistorySelectSettings {
    buttonColor: string;
}
export interface MapImage {
    imageUrl: string;
    aspect: number;
    update?: boolean;
}
export interface TripAnimationSettings extends PolygonSettings {
    showPoints: boolean;
    pointColor: string;
    pointSize: number;
    pointTooltipOnRightPanel: boolean;
    usePointAsAnchor: boolean;
    normalizationStep: number;
    showPolygon: boolean;
    showLabel: boolean;
    showTooltip: boolean;
    latKeyName: string;
    lngKeyName: string;
    rotationAngle: number;
    label: string;
    tooltipPattern: string;
    tooltipColor: string;
    tooltipOpacity: number;
    tooltipFontColor: string;
    useTooltipFunction: boolean;
    useLabelFunction: boolean;
    pointAsAnchorFunction: GenericFunction;
    tooltipFunction: GenericFunction;
    labelFunction: GenericFunction;
    useColorPointFunction: boolean;
    colorPointFunction: GenericFunction;
}
export declare type actionsHandler = ($event: Event, datasource: Datasource) => void;
export declare type UnitedMapSettings = MapSettings & PolygonSettings & MarkerSettings & PolylineSettings & CircleSettings & TripAnimationSettings & EditorSettings;
export declare const defaultSettings: Partial<UnitedMapSettings>;
export interface CircleData {
    latitude: number;
    longitude: number;
    radius: number;
}
export declare const circleDataKeys: Array<keyof CircleData>;
export declare const hereProviders: string[];

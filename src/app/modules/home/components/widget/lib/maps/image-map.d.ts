import { ImageMapSettings, TbCircleData, TbPolygonCoordinates, TbPolygonRawCoordinates, TbPolylineCoordinates, TbPolylineRawCoordinates } from '@shared/models/widget/maps/map.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { DeepPartial } from '@shared/models/common';
import { Observable } from 'rxjs';
import L from 'leaflet';
import { TbMap } from '@home/components/widget/lib/maps/map';
export declare class TbImageMap extends TbMap<ImageMapSettings> {
    protected ctx: WidgetContext;
    protected inputSettings: DeepPartial<ImageMapSettings>;
    protected containerElement: HTMLElement;
    private maxZoom;
    private width;
    private height;
    private imageLayerData;
    private initMapSubject;
    private imageOverlay;
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<ImageMapSettings>, containerElement: HTMLElement);
    protected defaultSettings(): ImageMapSettings;
    protected createMap(): Observable<L.Map>;
    protected onResize(updateImage?: boolean): void;
    protected fitBounds(_bounds: L.LatLngBounds): void;
    locationDataToLatLng(position: {
        x: number;
        y: number;
    }): L.LatLng;
    latLngToLocationData(position: L.LatLng): {
        x: number;
        y: number;
    };
    polygonDataToCoordinates(expression: TbPolygonRawCoordinates): TbPolygonRawCoordinates;
    coordinatesToPolygonData(coordinates: TbPolygonCoordinates): TbPolygonRawCoordinates;
    circleDataToCoordinates(circle: TbCircleData): TbCircleData;
    coordinatesToCircleData(center: L.LatLng, radius: number): TbCircleData;
    getAspect(): number;
    private pointToLatLng;
    private latLngToPoint;
    private doCreateMap;
    private updateMaxBounds;
    private loadImageLayerData;
    private imageFromUrl;
    private imageFromEntityData;
    polylineDataToCoordinates(expression: TbPolylineRawCoordinates): TbPolylineRawCoordinates;
    coordinatesToPolylineData(coordinates: TbPolylineCoordinates): TbPolylineRawCoordinates;
}

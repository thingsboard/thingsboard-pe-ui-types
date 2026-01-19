import { GeoMapSettings, TbCircleData, TbPolygonCoordinates, TbPolygonRawCoordinates, TbPolylineCoordinates, TbPolylineRawCoordinates } from '@shared/models/widget/maps/map.models';
import { WidgetContext } from '@home/models/widget-component.models';
import { DeepPartial } from '@shared/models/common';
import { Observable } from 'rxjs';
import L from 'leaflet';
import { TbMap } from '@home/components/widget/lib/maps/map';
export declare class TbGeoMap extends TbMap<GeoMapSettings> {
    protected ctx: WidgetContext;
    protected inputSettings: DeepPartial<GeoMapSettings>;
    protected containerElement: HTMLElement;
    constructor(ctx: WidgetContext, inputSettings: DeepPartial<GeoMapSettings>, containerElement: HTMLElement);
    protected defaultSettings(): GeoMapSettings;
    protected createMap(): Observable<L.Map>;
    protected onResize(): void;
    protected fitBounds(bounds: L.LatLngBounds): void;
    protected doSetupControls(): Observable<any>;
    private loadLayers;
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
    polylineDataToCoordinates(expression: TbPolylineRawCoordinates): TbPolylineRawCoordinates;
    coordinatesToPolylineData(coordinates: TbPolylineCoordinates): TbPolylineRawCoordinates;
}

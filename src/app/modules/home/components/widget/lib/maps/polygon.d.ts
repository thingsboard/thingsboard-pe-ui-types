import L, { LatLngExpression } from 'leaflet';
import { FormattedData, PolygonSettings, UnitedMapSettings } from './map-models';
export declare class Polygon {
    map: any;
    private settings;
    private onDragendListener?;
    leafletPoly: L.Polygon;
    tooltip: L.Popup;
    data: FormattedData;
    dataSources: FormattedData[];
    constructor(map: any, data: FormattedData, dataSources: FormattedData[], settings: UnitedMapSettings, onDragendListener?: any);
    private createEventListeners;
    updateTooltip(data: FormattedData): void;
    updateLabel(settings: PolygonSettings): void;
    updatePolygon(data: FormattedData, dataSources: FormattedData[], settings: PolygonSettings): void;
    removePolygon(): void;
    updatePolygonColor(settings: PolygonSettings): void;
    getPolygonLatLngs(): L.LatLng[] | L.LatLng[][] | L.LatLng[][][];
    setPolygonLatLngs(latLngs: LatLngExpression[]): void;
    private getPolygonColor;
    private getPolygonStrokeColor;
}

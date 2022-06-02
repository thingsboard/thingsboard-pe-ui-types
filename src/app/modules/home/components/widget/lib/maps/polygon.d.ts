import L, { LatLngExpression } from 'leaflet';
import { WidgetPolygonSettings } from './map-models';
import { FormattedData } from '@shared/models/widget.models';
import LeafletMap from '@home/components/widget/lib/maps/leaflet-map';
export declare class Polygon {
    private map;
    private data;
    private dataSources;
    private settings;
    private onDragendListener?;
    private editing;
    leafletPoly: L.Polygon;
    tooltip: L.Popup;
    constructor(map: LeafletMap, data: FormattedData, dataSources: FormattedData[], settings: Partial<WidgetPolygonSettings>, onDragendListener?: any, snappable?: boolean);
    private createEventListeners;
    updateTooltip(data: FormattedData): void;
    updateLabel(settings: Partial<WidgetPolygonSettings>): void;
    updatePolygon(data: FormattedData, dataSources: FormattedData[], settings: Partial<WidgetPolygonSettings>): void;
    removePolygon(): void;
    updatePolygonColor(settings: Partial<WidgetPolygonSettings>): void;
    getPolygonLatLngs(): L.LatLng[] | L.LatLng[][] | L.LatLng[][][];
    setPolygonLatLngs(latLngs: LatLngExpression[]): void;
    private getPolygonColor;
    private getPolygonStrokeColor;
}

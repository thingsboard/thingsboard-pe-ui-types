import L, { PolylineDecorator, PolylineDecoratorOptions } from 'leaflet';
import 'leaflet-polylinedecorator';
import { WidgetPolylineSettings } from './map-models';
import { FormattedData } from '@shared/models/widget.models';
export declare class Polyline {
    private map;
    private data;
    private dataSources;
    leafletPoly: L.Polyline;
    polylineDecorator: PolylineDecorator;
    constructor(map: L.Map, locations: L.LatLng[], data: FormattedData, dataSources: FormattedData[], settings: Partial<WidgetPolylineSettings>);
    getDecoratorSettings(settings: Partial<WidgetPolylineSettings>): PolylineDecoratorOptions;
    updatePolyline(locations: L.LatLng[], data: FormattedData, dataSources: FormattedData[], settings: Partial<WidgetPolylineSettings>): void;
    getPolyStyle(settings: Partial<WidgetPolylineSettings>): L.PolylineOptions;
    removePolyline(): void;
    getPolylineLatLngs(): L.LatLng[] | L.LatLng[][] | L.LatLng[][][];
}

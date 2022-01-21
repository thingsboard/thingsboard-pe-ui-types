import L, { PolylineDecorator, PolylineDecoratorOptions } from 'leaflet';
import 'leaflet-polylinedecorator';
import { FormattedData, PolylineSettings } from './map-models';
export declare class Polyline {
    private map;
    leafletPoly: L.Polyline;
    polylineDecorator: PolylineDecorator;
    dataSources: FormattedData[];
    data: FormattedData;
    constructor(map: L.Map, locations: L.LatLng[], data: FormattedData, dataSources: FormattedData[], settings: PolylineSettings);
    getDecoratorSettings(settings: PolylineSettings): PolylineDecoratorOptions;
    updatePolyline(locations: L.LatLng[], data: FormattedData, dataSources: FormattedData[], settings: PolylineSettings): void;
    getPolyStyle(settings: PolylineSettings): L.PolylineOptions;
    removePolyline(): void;
    getPolylineLatLngs(): L.LatLng[] | L.LatLng[][] | L.LatLng[][][];
}

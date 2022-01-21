import L, { LatLngBounds, LatLngLiteral, LatLngTuple } from 'leaflet';
import LeafletMap from '../leaflet-map';
import { PosFuncton, UnitedMapSettings } from '../map-models';
import { WidgetContext } from '@home/models/widget-component.models';
export declare class ImageMap extends LeafletMap {
    imageOverlay: L.ImageOverlay;
    aspect: number;
    width: number;
    height: number;
    imageUrl: string;
    posFunction: PosFuncton;
    constructor(ctx: WidgetContext, $container: HTMLElement, options: UnitedMapSettings);
    private mapImage;
    private imageFromUrl;
    private imageFromAlias;
    updateBounds(updateImage?: boolean, lastCenterPos?: any): void;
    onResize(updateImage?: boolean): void;
    fitBounds(bounds: LatLngBounds, padding?: LatLngTuple): void;
    initMap(updateImage?: boolean): void;
    convertPosition(expression: any): L.LatLng;
    convertPositionPolygon(expression: (LatLngTuple | LatLngTuple[] | LatLngTuple[][])[]): any;
    pointToLatLng(x: any, y: any): L.LatLng;
    latLngToPoint(latLng: LatLngLiteral): L.Point;
    convertToCustomFormat(position: L.LatLng, offset?: number, width?: number, height?: number): {
        [key: string]: any;
    };
    convertToPolygonFormat(points: Array<any>, width?: number, height?: number): Array<any>;
    convertPolygonToCustomFormat(expression: any[][]): {
        [key: string]: any;
    };
}

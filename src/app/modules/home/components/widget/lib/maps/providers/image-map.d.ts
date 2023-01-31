import L, { LatLngBounds, LatLngLiteral, LatLngTuple } from 'leaflet';
import LeafletMap from '../leaflet-map';
import { CircleData, PosFunction, WidgetUnitedMapSettings } from '../map-models';
import { WidgetContext } from '@home/models/widget-component.models';
import { FormattedData } from '@shared/models/widget.models';
export declare class ImageMap extends LeafletMap {
    imageOverlay: L.ImageOverlay;
    aspect: number;
    width: number;
    height: number;
    imageUrl: string;
    posFunction: PosFunction;
    private mapUuid;
    constructor(ctx: WidgetContext, $container: HTMLElement, options: WidgetUnitedMapSettings);
    private mapImage;
    private imageFromUrl;
    private imageFromAlias;
    updateBounds(updateImage?: boolean, lastCenterPos?: any): void;
    onResize(updateImage?: boolean): void;
    fitBounds(bounds: LatLngBounds, padding?: LatLngTuple): void;
    initMap(updateImage?: boolean): void;
    extractPosition(data: FormattedData): {
        x: number;
        y: number;
    };
    positionToLatLng(position: {
        x: number;
        y: number;
    }): L.LatLng;
    convertPosition(data: any, dsData: FormattedData[]): L.LatLng;
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
    convertCircleToCustomFormat(expression: L.LatLng, radius: number, width?: number, height?: number): {
        [key: string]: CircleData;
    };
    convertToCircleFormat(circle: CircleData, width?: number, height?: number): CircleData;
}

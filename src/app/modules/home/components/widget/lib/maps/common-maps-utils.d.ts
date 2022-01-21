import { FormattedData, MapProviders, ReplaceInfo } from '@home/components/widget/lib/maps/map-models';
import { Observable } from 'rxjs';
import { Datasource, DatasourceData } from '@shared/models/widget.models';
import L from 'leaflet';
export declare function getProviderSchema(mapProvider: MapProviders, ignoreImageMap?: boolean): import("@shared/models/widget.models").JsonSettingsSchema;
export declare function getRatio(firsMoment: number, secondMoment: number, intermediateMoment: number): number;
export declare function interpolateOnLineSegment(pointA: FormattedData, pointB: FormattedData, latKeyName: string, lngKeyName: string, ratio: number): {
    [key: string]: number;
};
export declare function findAngle(startPoint: FormattedData, endPoint: FormattedData, latKeyName: string, lngKeyName: string): number;
export declare function getDefCenterPosition(position: any): any;
export declare function aspectCache(imageUrl: string): Observable<number>;
export declare type TranslateFunc = (key: string, defaultTranslation?: string) => string;
export declare function processPattern(template: string, data: {
    $datasource?: Datasource;
    [key: string]: any;
}): Array<ReplaceInfo>;
export declare function fillPattern(markerLabelText: string, replaceInfoLabelMarker: Array<ReplaceInfo>, data: FormattedData): string;
export declare const parseWithTranslation: {
    translateFn: any;
    translate(key: string, defaultTranslation?: string): string;
    parseTemplate(template: string, data: object, forceTranslate?: boolean): string;
    prepareProcessPattern(template: string, forceTranslate?: boolean): string;
    setTranslate(translateFn: TranslateFunc): void;
};
export declare function parseData(input: DatasourceData[], dataIndex?: number): FormattedData[];
export declare function flatData(input: FormattedData[]): FormattedData;
export declare function parseArray(input: DatasourceData[]): FormattedData[][];
export declare function parseFunction(source: any, params?: string[]): (...args: any[]) => any;
export declare function safeExecute(func: (...args: any[]) => any, params?: any[]): any;
export declare function functionValueCalculator(useFunction: boolean, func: (...args: any[]) => any, params: any[], defaultValue: any): any;
export declare function calculateNewPointCoordinate(coordinate: number, imageSize: number): number;
export declare function createLoadingDiv(loadingText: string): JQuery<HTMLElement>;
export declare function checkLngLat(point: L.LatLng, southWest: L.LatLng, northEast: L.LatLng, offset?: number): L.LatLng;

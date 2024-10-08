import { Observable } from 'rxjs';
import { FormattedData } from '@shared/models/widget.models';
import L from 'leaflet';
import { ImagePipe } from '@shared/pipe/image.pipe';
export declare function getRatio(firsMoment: number, secondMoment: number, intermediateMoment: number): number;
export declare function interpolateOnLineSegment(pointA: FormattedData, pointB: FormattedData, latKeyName: string, lngKeyName: string, ratio: number): {
    [key: string]: number;
};
export declare function findAngle(startPoint: FormattedData, endPoint: FormattedData, latKeyName: string, lngKeyName: string): number;
export declare function getDefCenterPosition(position: string | [number, number]): [number, number];
export interface ImageWithAspect {
    url: string;
    aspect: number;
}
export declare const loadImageWithAspect: (imagePipe: ImagePipe, imageUrl: string) => Observable<ImageWithAspect>;
export type TranslateFunc = (key: string, defaultTranslation?: string) => string;
export declare const parseWithTranslation: {
    translateFn: any;
    translate(key: string, defaultTranslation?: string): string;
    parseTemplate(template: string, data: FormattedData, forceTranslate?: boolean): string;
    prepareProcessPattern(template: string, forceTranslate?: boolean): string;
    setTranslate(translateFn: TranslateFunc): void;
};
export declare function functionValueCalculator<T>(useFunction: boolean, func: (...args: any[]) => any, params: any[], defaultValue: T): T;
export declare function calculateNewPointCoordinate(coordinate: number, imageSize: number): number;
export declare function createLoadingDiv(loadingText: string): JQuery<HTMLElement>;
export declare function checkLngLat(point: L.LatLng, southWest: L.LatLng, northEast: L.LatLng, offset?: number): L.LatLng;

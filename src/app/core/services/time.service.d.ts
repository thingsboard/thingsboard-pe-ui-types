import { AggregationType, Timewindow } from '@shared/models/time/time.models';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export interface TimeInterval {
    name: string;
    translateParams: {
        [key: string]: any;
    };
    value: number;
}
export declare class TimeService {
    private http;
    private maxDatapointsLimit;
    constructor(http: HttpClient);
    setMaxDatapointsLimit(limit: number): void;
    matchesExistingInterval(min: number, max: number, intervalMs: number): boolean;
    getIntervals(min: number, max: number): Array<TimeInterval>;
    boundMinInterval(min: number): number;
    boundMaxInterval(max: number): number;
    boundToPredefinedInterval(min: number, max: number, intervalMs: number): number;
    boundIntervalToTimewindow(timewindow: number, intervalMs: number, aggType: AggregationType): number;
    getMaxDatapointsLimit(): number;
    getMinDatapointsLimit(): number;
    avgInterval(timewindow: number): number;
    minIntervalLimit(timewindowMs: number): number;
    maxIntervalLimit(timewindowMs: number): number;
    defaultTimewindow(): Timewindow;
    private toBound;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimeService>;
}

import { AggregationType, Interval, TimeInterval, Timewindow, TimezoneInfo } from '@shared/models/time/time.models';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class TimeService {
    private http;
    private translate;
    private maxDatapointsLimit;
    private localBrowserTimezoneInfoPlaceholder;
    constructor(http: HttpClient, translate: TranslateService);
    setMaxDatapointsLimit(limit: number): void;
    matchesExistingInterval(min: number, max: number, interval: Interval, useCalendarIntervals?: boolean): boolean;
    getIntervals(min: number, max: number, useCalendarIntervals?: boolean): Array<TimeInterval>;
    boundMinInterval(min: number): number;
    boundMaxInterval(max: number): number;
    boundToPredefinedInterval(min: number, max: number, interval: Interval, useCalendarIntervals?: boolean): Interval;
    boundIntervalToTimewindow(timewindow: number, interval: Interval, aggType: AggregationType): Interval;
    getMaxDatapointsLimit(): number;
    getMinDatapointsLimit(): number;
    avgInterval(timewindow: number): number;
    minIntervalLimit(timewindowMs: number): number;
    maxIntervalLimit(timewindowMs: number): number;
    defaultTimewindow(): Timewindow;
    private toBound;
    private toIntervalBound;
    getLocalBrowserTimezoneInfoPlaceholder(): TimezoneInfo;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TimeService>;
}

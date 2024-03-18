import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { SchedulerEvent, SchedulerEventInfo, SchedulerEventWithCustomerInfo } from '@shared/models/scheduler-event.models';
import * as i0 from "@angular/core";
export declare class SchedulerEventService {
    private http;
    constructor(http: HttpClient);
    getSchedulerEvents(type?: string, config?: RequestConfig): Observable<Array<SchedulerEventWithCustomerInfo>>;
    getSchedulerEventsByIds(schedulerEventIds: Array<string>, config?: RequestConfig): Observable<Array<SchedulerEventInfo>>;
    getSchedulerEventInfo(schedulerEventId: string, config?: RequestConfig): Observable<SchedulerEventWithCustomerInfo>;
    getSchedulerEvent(schedulerEventId: string, config?: RequestConfig): Observable<SchedulerEvent>;
    saveSchedulerEvent(schedulerEvent: SchedulerEvent, config?: RequestConfig): Observable<SchedulerEvent>;
    deleteSchedulerEvent(schedulerEventId: string, config?: RequestConfig): Observable<Object>;
    getEdgeSchedulerEvents(edgeId: string, config?: RequestConfig): Observable<Array<SchedulerEventWithCustomerInfo>>;
    assignSchedulerEventToEdge(edgeId: string, schedulerEventId: string, config?: RequestConfig): Observable<SchedulerEventInfo>;
    unassignSchedulerEventFromEdge(edgeId: string, schedulerEventId: string, config?: RequestConfig): Observable<Object>;
    updateSchedulerStatus(schedulerEventId: string, enabled: boolean, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SchedulerEventService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SchedulerEventService>;
}

import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TimePageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntityId } from '@shared/models/id/entity-id';
import { DebugEventType, Event, EventType, FilterEventBody } from '@shared/models/event.models';
import * as i0 from "@angular/core";
export declare class EventService {
    private http;
    constructor(http: HttpClient);
    getEvents(entityId: EntityId, eventType: EventType | DebugEventType, tenantId: string, pageLink: TimePageLink, config?: RequestConfig): Observable<PageData<Event>>;
    getFilterEvents(entityId: EntityId, eventType: EventType | DebugEventType, tenantId: string, filters: FilterEventBody, pageLink: TimePageLink, config?: RequestConfig): Observable<PageData<Event>>;
    clearEvents(entityId: EntityId, eventType: EventType | DebugEventType, filters: FilterEventBody, tenantId: string, pageLink: TimePageLink, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EventService>;
}

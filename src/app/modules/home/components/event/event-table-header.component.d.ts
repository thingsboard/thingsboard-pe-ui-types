import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { DebugEventType, Event, EventType } from '@app/shared/models/event.models';
import { EventTableConfig } from '@home/components/event/event-table-config';
import * as i0 from "@angular/core";
export declare class EventTableHeaderComponent extends EntityTableHeaderComponent<Event> {
    protected store: Store<AppState>;
    eventTypeTranslationsMap: Map<EventType | DebugEventType, string>;
    get eventTableConfig(): EventTableConfig;
    constructor(store: Store<AppState>);
    eventTypeChanged(eventType: EventType | DebugEventType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EventTableHeaderComponent, "tb-event-table-header", never, {}, {}, never, never, false, never>;
}

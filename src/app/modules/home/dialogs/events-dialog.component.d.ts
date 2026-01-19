import { AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { DialogComponent } from '@shared/components/dialog.component';
import { EventTableComponent } from '@home/components/event/event-table.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { DebugEventType, EventType } from '@shared/models/event.models';
import { EntityId } from '@shared/models/id/entity-id';
import * as i0 from "@angular/core";
export interface EventsDialogData {
    title: string;
    tenantId: string;
    entityId: EntityId;
    debugEventTypes: Array<DebugEventType>;
    defaultEventType: DebugEventType;
    disabledEventTypes?: Array<EventType | DebugEventType>;
    functionTestButtonLabel?: string;
    onDebugEventSelected?: (event: any, dialogRef: MatDialogRef<EventsDialogComponent, string>) => void;
    debugActionDisabled?: boolean;
    hideClearEventAction?: boolean;
    isReadOnly?: boolean;
}
export declare class EventsDialogComponent extends DialogComponent<EventsDialogComponent, string> implements AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: EventsDialogData;
    protected dialogRef: MatDialogRef<EventsDialogComponent, string>;
    eventsTable: EventTableComponent;
    constructor(store: Store<AppState>, router: Router, data: EventsDialogData, dialogRef: MatDialogRef<EventsDialogComponent, string>);
    ngAfterViewInit(): void;
    cancel(): void;
    onDebugEventSelected(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventsDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EventsDialogComponent, "tb-debug-dialog", never, {}, {}, never, never, false, never>;
}

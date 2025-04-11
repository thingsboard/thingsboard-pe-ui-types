import { AfterViewInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Router } from '@angular/router';
import { DialogComponent } from '@shared/components/dialog.component';
import { CalculatedFieldEventBody, DebugEventType, EventType } from '@shared/models/event.models';
import { EventTableComponent } from '@home/components/event/event-table.component';
import { CalculatedField, CalculatedFieldTestScriptFn } from '@shared/models/calculated-field.models';
import * as i0 from "@angular/core";
export interface CalculatedFieldDebugDialogData {
    tenantId: string;
    value: CalculatedField;
    getTestScriptDialogFn: CalculatedFieldTestScriptFn;
}
export declare class CalculatedFieldDebugDialogComponent extends DialogComponent<CalculatedFieldDebugDialogComponent, string> implements AfterViewInit {
    protected store: Store<AppState>;
    protected router: Router;
    data: CalculatedFieldDebugDialogData;
    protected dialogRef: MatDialogRef<CalculatedFieldDebugDialogComponent, string>;
    eventsTable: EventTableComponent;
    readonly DebugEventType: typeof DebugEventType;
    readonly debugEventTypes: typeof DebugEventType;
    readonly EventType: typeof EventType;
    constructor(store: Store<AppState>, router: Router, data: CalculatedFieldDebugDialogData, dialogRef: MatDialogRef<CalculatedFieldDebugDialogComponent, string>);
    ngAfterViewInit(): void;
    cancel(): void;
    onDebugEventSelected(event: CalculatedFieldEventBody): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CalculatedFieldDebugDialogComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CalculatedFieldDebugDialogComponent, "tb-calculated-field-debug-dialog", never, {}, {}, never, never, false, never>;
}

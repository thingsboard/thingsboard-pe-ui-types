import { InjectionToken } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { OverlayRef } from '@angular/cdk/overlay';
import { FilterEventBody } from '@shared/models/event.models';
import * as i0 from "@angular/core";
export declare const EVENT_FILTER_PANEL_DATA: InjectionToken<any>;
export interface EventFilterPanelData {
    filterParams: FilterEventBody;
    columns: Array<FilterEntityColumn>;
}
export interface FilterEntityColumn {
    key: string;
    title: string;
}
export declare class EventFilterPanelComponent {
    data: EventFilterPanelData;
    overlayRef: OverlayRef;
    private fb;
    eventFilterFormGroup: UntypedFormGroup;
    result: EventFilterPanelData;
    private conditionError;
    private msgDirectionTypes;
    private statusTypes;
    private msgTypes;
    private entityTypes;
    showColumns: FilterEntityColumn[];
    constructor(data: EventFilterPanelData, overlayRef: OverlayRef, fb: UntypedFormBuilder);
    isSelector(key: string): string;
    isNumberFields(key: string): string;
    selectorValues(key: string): string[];
    update(): void;
    showErrorMsgFields(): boolean;
    cancel(): void;
    changeIsError(value: boolean | string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EventFilterPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EventFilterPanelComponent, "tb-event-filter-panel", never, {}, {}, never, never, false>;
}

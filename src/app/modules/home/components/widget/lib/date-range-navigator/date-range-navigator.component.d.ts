import { OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { PageComponent } from '@shared/components/page.component';
import { WidgetContext } from '@home/models/widget-component.models';
import { UtilsService } from '@core/services/utils.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DateIntervalEntry, DateRangeNavigatorModel, DateRangeNavigatorSettings } from '@home/components/widget/lib/date-range-navigator/date-range-navigator.models';
import { KeyValue } from '@angular/common';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { MatSelect } from '@angular/material/select';
import * as i0 from "@angular/core";
export declare class DateRangeNavigatorWidgetComponent extends PageComponent implements OnInit, OnDestroy {
    private utils;
    private overlay;
    private viewContainerRef;
    protected store: Store<AppState>;
    ctx: WidgetContext;
    datePickerSelect: MatSelect;
    settings: DateRangeNavigatorSettings;
    datesMap: {
        [key: string]: DateIntervalEntry;
    };
    advancedModel: DateRangeNavigatorModel;
    selectedDateInterval: number;
    customInterval: DateIntervalEntry;
    selectedStepSize: number;
    private firstUpdate;
    private dashboardTimewindowChangedSubscription;
    originalOrder: (a: KeyValue<string, DateIntervalEntry>, b: KeyValue<string, DateIntervalEntry>) => number;
    constructor(utils: UtilsService, overlay: Overlay, viewContainerRef: ViewContainerRef, store: Store<AppState>);
    ngOnInit(): void;
    ngOnDestroy(): void;
    openNavigatorPanel($event: Event): void;
    private widgetContextTimewindowSync;
    private updateAdvancedModel;
    private updateTimewindow;
    private updateDateInterval;
    triggerChange(): void;
    changeInterval(): void;
    goBack(): void;
    goForth(): void;
    private step;
    private readFromStorage;
    private updateStorageDate;
    private saveIntoStorage;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangeNavigatorWidgetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangeNavigatorWidgetComponent, "tb-date-range-navigator-widget", never, { "ctx": { "alias": "ctx"; "required": false; }; }, {}, never, never, false, never>;
}
export interface DateRangeNavigatorPanelData {
    model: DateRangeNavigatorModel;
    settings: DateRangeNavigatorSettings;
    onChange: (model: DateRangeNavigatorModel) => void;
}
export declare class DateRangeNavigatorPanelComponent {
    data: DateRangeNavigatorPanelData;
    private overlayRef;
    settings: DateRangeNavigatorSettings;
    model: DateRangeNavigatorModel;
    locale: any;
    constructor(data: DateRangeNavigatorPanelData, overlayRef: OverlayRef);
    choosedDate($event: any): void;
    apply(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DateRangeNavigatorPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DateRangeNavigatorPanelComponent, "tb-date-range-navigator-panel", never, {}, {}, never, never, false, never>;
}

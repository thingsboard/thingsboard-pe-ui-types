import { InjectionToken, OnDestroy, OnInit } from '@angular/core';
import { OverlayRef } from '@angular/cdk/overlay';
import { TimeseriesDeleteStrategy } from '@shared/models/telemetry/telemetry.models';
import { FormBuilder, FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare const DELETE_TIMESERIES_PANEL_DATA: InjectionToken<any>;
export interface DeleteTimeseriesPanelResult {
    strategy: TimeseriesDeleteStrategy;
    startDateTime: Date;
    endDateTime: Date;
    rewriteLatest: boolean;
}
export declare class DeleteTimeseriesPanelComponent implements OnInit, OnDestroy {
    private overlayRef;
    private fb;
    deleteTimeseriesFormGroup: FormGroup;
    result: DeleteTimeseriesPanelResult;
    strategiesTranslationsMap: Map<TimeseriesDeleteStrategy, string>;
    private destroy$;
    constructor(overlayRef: OverlayRef, fb: FormBuilder);
    ngOnInit(): void;
    ngOnDestroy(): void;
    delete(): void;
    cancel(): void;
    isPeriodStrategy(): boolean;
    isDeleteLatestStrategy(): boolean;
    private onStartDateTimeChange;
    private onEndDateTimeChange;
    static ɵfac: i0.ɵɵFactoryDeclaration<DeleteTimeseriesPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DeleteTimeseriesPanelComponent, "tb-delete-timeseries-panel", never, {}, {}, never, never, false, never>;
}

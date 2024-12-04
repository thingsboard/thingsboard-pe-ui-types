import { OnInit } from '@angular/core';
import { HistoryWindowType, RealtimeWindowType, TimewindowAggIntervalsConfig, TimewindowInterval, TimewindowIntervalOption, TimewindowType } from '@shared/models/time/time.models';
import { FormBuilder, FormGroup, UntypedFormArray } from '@angular/forms';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { TimeService } from '@core/services/time.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface IntervalOptionsConfigPanelData {
    allowedIntervals: Array<TimewindowInterval>;
    aggIntervalsConfig: TimewindowAggIntervalsConfig;
}
export declare class IntervalOptionsConfigPanelComponent implements OnInit {
    private fb;
    private timeService;
    private translate;
    aggregation: boolean;
    allowedIntervals: Array<TimewindowInterval>;
    aggIntervalsConfig: TimewindowAggIntervalsConfig;
    intervalType: RealtimeWindowType | HistoryWindowType;
    timewindowType: TimewindowType;
    onClose: (result: IntervalOptionsConfigPanelData | null) => void;
    popoverComponent: TbPopoverComponent;
    intervalOptionsConfigForm: FormGroup;
    allIntervals: Array<TimewindowIntervalOption>;
    allIntervalValues: Array<TimewindowInterval>;
    private timeIntervalTranslationMap;
    private destroyRef;
    constructor(fb: FormBuilder, timeService: TimeService, translate: TranslateService);
    ngOnInit(): void;
    get intervalsFormArray(): UntypedFormArray;
    minAggInterval(interval: TimewindowInterval): number;
    maxAggInterval(interval: TimewindowInterval): number;
    private getIntervalMs;
    trackByElement(i: number, item: any): any;
    update(): void;
    cancel(): void;
    reset(): void;
    private getQuickIntervals;
    getIndeterminate(): boolean;
    enableDisableIntervals(allEnabled: boolean): void;
    getChecked(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntervalOptionsConfigPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntervalOptionsConfigPanelComponent, "tb-interval-options-config-panel", never, { "aggregation": { "alias": "aggregation"; "required": false; }; "allowedIntervals": { "alias": "allowedIntervals"; "required": false; }; "aggIntervalsConfig": { "alias": "aggIntervalsConfig"; "required": false; }; "intervalType": { "alias": "intervalType"; "required": false; }; "timewindowType": { "alias": "timewindowType"; "required": false; }; "onClose": { "alias": "onClose"; "required": false; }; "popoverComponent": { "alias": "popoverComponent"; "required": false; }; }, {}, never, never, false, never>;
}

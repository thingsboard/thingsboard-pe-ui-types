import { EventEmitter, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TimeSeriesChartAxisSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartAxisSettingsPanelComponent implements OnInit {
    private fb;
    axisType: 'xAxis' | 'yAxis';
    panelTitle: string;
    axisSettings: TimeSeriesChartAxisSettings;
    advanced: boolean;
    popover: TbPopoverComponent<TimeSeriesChartAxisSettingsPanelComponent>;
    axisSettingsApplied: EventEmitter<TimeSeriesChartAxisSettings>;
    axisSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    applyAxisSettings(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartAxisSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartAxisSettingsPanelComponent, "tb-time-series-chart-axis-settings-panel", never, { "axisType": { "alias": "axisType"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; "axisSettings": { "alias": "axisSettings"; "required": false; }; "advanced": { "alias": "advanced"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "axisSettingsApplied": "axisSettingsApplied"; }, never, never, false, never>;
}

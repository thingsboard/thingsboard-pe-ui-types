import { EventEmitter, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TimeSeriesChartYAxisSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartYAxisSettingsPanelComponent implements OnInit {
    private fb;
    yAxisSettings: TimeSeriesChartYAxisSettings;
    advanced: boolean;
    popover: TbPopoverComponent<TimeSeriesChartYAxisSettingsPanelComponent>;
    yAxisSettingsApplied: EventEmitter<TimeSeriesChartYAxisSettings>;
    yAxisSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    applyYAxisSettings(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartYAxisSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartYAxisSettingsPanelComponent, "tb-time-series-chart-y-axis-settings-panel", never, { "yAxisSettings": "yAxisSettings"; "advanced": "advanced"; "popover": "popover"; }, { "yAxisSettingsApplied": "yAxisSettingsApplied"; }, never, never, false, never>;
}

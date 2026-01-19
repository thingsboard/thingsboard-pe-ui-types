import { EventEmitter, OnInit } from '@angular/core';
import { TbPopoverComponent } from '@shared/components/popover.component';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TimeSeriesChartAxisSettings } from '@home/components/widget/lib/chart/time-series-chart.models';
import { IAliasController } from '@core/api/widget-api.models';
import { DataKeysCallbacks } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import { Datasource } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class TimeSeriesChartAxisSettingsPanelComponent implements OnInit {
    private fb;
    aliasController: IAliasController;
    dataKeyCallbacks: DataKeysCallbacks;
    datasource: Datasource;
    axisType: 'xAxis' | 'yAxis';
    panelTitle: string;
    axisSettings: TimeSeriesChartAxisSettings;
    advanced: boolean;
    reportMode: boolean;
    popover: TbPopoverComponent<TimeSeriesChartAxisSettingsPanelComponent>;
    axisSettingsApplied: EventEmitter<TimeSeriesChartAxisSettings>;
    axisSettingsFormGroup: UntypedFormGroup;
    constructor(fb: UntypedFormBuilder);
    ngOnInit(): void;
    cancel(): void;
    applyAxisSettings(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeSeriesChartAxisSettingsPanelComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeSeriesChartAxisSettingsPanelComponent, "tb-time-series-chart-axis-settings-panel", never, { "aliasController": { "alias": "aliasController"; "required": false; }; "dataKeyCallbacks": { "alias": "dataKeyCallbacks"; "required": false; }; "datasource": { "alias": "datasource"; "required": false; }; "axisType": { "alias": "axisType"; "required": false; }; "panelTitle": { "alias": "panelTitle"; "required": false; }; "axisSettings": { "alias": "axisSettings"; "required": false; }; "advanced": { "alias": "advanced"; "required": false; }; "reportMode": { "alias": "reportMode"; "required": false; }; "popover": { "alias": "popover"; "required": false; }; }, { "axisSettingsApplied": "axisSettingsApplied"; }, never, never, false, never>;
}

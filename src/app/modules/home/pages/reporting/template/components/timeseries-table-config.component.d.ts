import { FormGroup } from '@angular/forms';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { TimeseriesTableReportComponentConfig } from '@shared/models/report-component.models';
import { WidgetConfigMode } from '@shared/models/widget.models';
import { DataKeySettingsFormFunction } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import * as i0 from "@angular/core";
export declare class TimeseriesTableConfigComponent extends AbstractReportComponentConfig<TimeseriesTableReportComponentConfig> {
    get columnLabels(): string[];
    columnNameChanged: [string, string];
    settingsTab: 'data' | 'layout';
    basicMode: WidgetConfigMode;
    dataKeySettingsFormFunction: DataKeySettingsFormFunction;
    private dialog;
    private translate;
    private getDataKeySettingsForm;
    protected buildForm(reportComponentConfig: TimeseriesTableReportComponentConfig): FormGroup;
    protected prepareOutputConfig(config: any): any;
    editTimestampColumnSettings(): void;
    private getColumns;
    private setColumns;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeseriesTableConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeseriesTableConfigComponent, "tb-timeseries-table-config", never, {}, {}, never, never, false, never>;
}

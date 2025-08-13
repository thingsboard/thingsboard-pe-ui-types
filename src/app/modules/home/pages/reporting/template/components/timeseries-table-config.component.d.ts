import { FormGroup } from '@angular/forms';
import { TimeseriesTableReportComponentConfig, WidgetConfigMode } from '@app/shared/public-api';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import * as i0 from "@angular/core";
export declare class TimeseriesTableConfigComponent extends AbstractReportComponentConfig<TimeseriesTableReportComponentConfig> {
    get columnLabels(): string[];
    settingsTab: 'data' | 'layout';
    basicMode: WidgetConfigMode;
    TableReportColumnSettingsForm: import("@app/shared/public-api").FormProperty[];
    private dialog;
    private translate;
    protected buildForm(reportComponentConfig: TimeseriesTableReportComponentConfig): FormGroup;
    protected prepareOutputConfig(config: any): any;
    editTimestampColumnSettings(): void;
    private getColumns;
    private setColumns;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<TimeseriesTableConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TimeseriesTableConfigComponent, "tb-timeseries-table-config", never, {}, {}, never, never, false, never>;
}

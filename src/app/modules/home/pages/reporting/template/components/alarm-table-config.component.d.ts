import { FormGroup } from '@angular/forms';
import { AlarmTableReportComponentConfig, WidgetConfigMode } from '@app/shared/public-api';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import * as i0 from "@angular/core";
export declare class AlarmTableConfigComponent extends AbstractReportComponentConfig<AlarmTableReportComponentConfig> {
    get columnLabels(): string[];
    settingsTab: 'data' | 'layout';
    basicMode: WidgetConfigMode;
    TableReportColumnSettingsForm: import("@app/shared/public-api").FormProperty[];
    protected buildForm(reportComponentConfig: AlarmTableReportComponentConfig): FormGroup;
    protected prepareOutputConfig(config: any): AlarmTableReportComponentConfig;
    private getColumns;
    private setColumns;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmTableConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmTableConfigComponent, "tb-alarm-table-config", never, {}, {}, never, never, false, never>;
}

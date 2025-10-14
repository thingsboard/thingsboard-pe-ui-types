import { FormGroup } from '@angular/forms';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { DataKeySettingsFormFunction } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import { AlarmTableReportComponentConfig } from '@shared/models/report-component.models';
import { WidgetConfigMode } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class AlarmTableConfigComponent extends AbstractReportComponentConfig<AlarmTableReportComponentConfig> {
    get columnLabels(): string[];
    settingsTab: 'data' | 'layout';
    basicMode: WidgetConfigMode;
    dataKeySettingsFormFunction: DataKeySettingsFormFunction;
    private getDataKeySettingsForm;
    protected buildForm(reportComponentConfig: AlarmTableReportComponentConfig): FormGroup;
    protected prepareOutputConfig(config: any): AlarmTableReportComponentConfig;
    private getColumns;
    private setColumns;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmTableConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AlarmTableConfigComponent, "tb-alarm-table-config", never, {}, {}, never, never, false, never>;
}

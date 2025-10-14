import { FormGroup } from '@angular/forms';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { EntityTableReportComponentConfig } from '@shared/models/report-component.models';
import { WidgetConfigMode } from '@shared/models/widget.models';
import { DataKeySettingsFormFunction } from '@home/components/widget/lib/settings/common/key/data-keys.component.models';
import * as i0 from "@angular/core";
export declare class EntityTableConfigComponent extends AbstractReportComponentConfig<EntityTableReportComponentConfig> {
    get columnLabels(): string[];
    settingsTab: 'data' | 'layout';
    basicMode: WidgetConfigMode;
    dataKeySettingsFormFunction: DataKeySettingsFormFunction;
    private getDataKeySettingsForm;
    protected buildForm(reportComponentConfig: EntityTableReportComponentConfig): FormGroup;
    protected prepareOutputConfig(config: any): any;
    private getColumns;
    private setColumns;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTableConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTableConfigComponent, "tb-entity-table-config", never, {}, {}, never, never, false, never>;
}

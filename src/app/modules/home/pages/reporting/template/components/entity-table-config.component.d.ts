import { FormGroup } from '@angular/forms';
import { EntityTableReportComponentConfig, WidgetConfigMode } from '@app/shared/public-api';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import * as i0 from "@angular/core";
export declare class EntityTableConfigComponent extends AbstractReportComponentConfig<EntityTableReportComponentConfig> {
    get columnLabels(): string[];
    settingsTab: 'data' | 'layout';
    basicMode: WidgetConfigMode;
    TableReportColumnSettingsForm: import("@app/shared/public-api").FormProperty[];
    protected buildForm(reportComponentConfig: EntityTableReportComponentConfig): FormGroup;
    protected prepareOutputConfig(config: any): any;
    private getColumns;
    private setColumns;
    private updateValidators;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTableConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityTableConfigComponent, "tb-entity-table-config", never, {}, {}, never, never, false, never>;
}

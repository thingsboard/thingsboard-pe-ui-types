import { FormGroup } from '@angular/forms';
import { EntityType, ReportTemplateType, SubReportReportComponentConfig, WidgetConfigMode } from '@app/shared/public-api';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import * as i0 from "@angular/core";
export declare class SubReportConfigComponent extends AbstractReportComponentConfig<SubReportReportComponentConfig> {
    EntityType: typeof EntityType;
    ReportTemplateType: typeof ReportTemplateType;
    basicMode: WidgetConfigMode;
    protected buildForm(reportComponentConfig: SubReportReportComponentConfig): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubReportConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubReportConfigComponent, "tb-sub-report-config", never, {}, {}, never, never, false, never>;
}

import { FormGroup } from '@angular/forms';
import { DashboardReportComponentConfig, WidgetConfigMode } from '@app/shared/public-api';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import * as i0 from "@angular/core";
export declare class DashboardConfigComponent extends AbstractReportComponentConfig<DashboardReportComponentConfig> {
    imageWidthTypes: string[];
    imageWidthTypeTranslations: Map<string, string>;
    imageAlignments: string[];
    imageAlignmentTranslations: Map<string, string>;
    basicMode: WidgetConfigMode;
    settingsTab: 'dashboard' | 'layout';
    protected buildForm(reportComponentConfig: DashboardReportComponentConfig): FormGroup;
    private updateCustomWidth;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardConfigComponent, "tb-dashboard-config", never, {}, {}, never, never, false, never>;
}

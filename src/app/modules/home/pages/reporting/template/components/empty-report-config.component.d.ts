import { FormGroup } from '@angular/forms';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { ReportComponentConfig } from '@shared/models/report-component.models';
import * as i0 from "@angular/core";
export declare class EmptyReportConfigComponent extends AbstractReportComponentConfig {
    title: string;
    setupConfig(reportComponentConfig: ReportComponentConfig): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<EmptyReportConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EmptyReportConfigComponent, "tb-empty-report-config", never, {}, {}, never, never, false, never>;
}

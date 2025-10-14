import { FormGroup } from '@angular/forms';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { DividerReportComponentConfig } from '@shared/models/report-component.models';
import * as i0 from "@angular/core";
export declare class DividerConfigComponent extends AbstractReportComponentConfig<DividerReportComponentConfig> {
    settingsTab: 'content' | 'layout';
    borderLengths: import("@shared/models/report-component.models").BorderLength[];
    borderLengthTranslations: Map<import("@shared/models/report-component.models").BorderLength, string>;
    borderTypes: import("@shared/models/report-component.models").BorderType[];
    borderTypeTranslations: Map<import("@shared/models/report-component.models").BorderType, string>;
    protected buildForm(reportComponentConfig: DividerReportComponentConfig): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<DividerConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DividerConfigComponent, "tb-report-divider-config", never, {}, {}, never, never, false, never>;
}

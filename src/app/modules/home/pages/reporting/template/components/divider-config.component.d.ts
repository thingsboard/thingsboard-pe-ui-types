import { FormGroup } from '@angular/forms';
import { DividerReportComponentConfig } from '@app/shared/public-api';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import * as i0 from "@angular/core";
export declare class DividerConfigComponent extends AbstractReportComponentConfig<DividerReportComponentConfig> {
    settingsTab: 'content' | 'layout';
    borderLengths: import("@app/shared/public-api").BorderLength[];
    borderLengthTranslations: Map<import("@app/shared/public-api").BorderLength, string>;
    borderTypes: import("@app/shared/public-api").BorderType[];
    borderTypeTranslations: Map<import("@app/shared/public-api").BorderType, string>;
    protected buildForm(reportComponentConfig: DividerReportComponentConfig): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<DividerConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DividerConfigComponent, "tb-report-divider-config", never, {}, {}, never, never, false, never>;
}

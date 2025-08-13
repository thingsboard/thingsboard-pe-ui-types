import { FormGroup } from '@angular/forms';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { HeadingReportComponentConfig } from '@shared/models/report-component.models';
import * as i0 from "@angular/core";
export declare class HeadingConfigComponent extends AbstractReportComponentConfig<HeadingReportComponentConfig> {
    settingsTab: 'content' | 'data' | 'layout';
    protected buildForm(reportComponentConfig: HeadingReportComponentConfig): FormGroup;
    protected prepareOutputConfig(config: any): HeadingReportComponentConfig;
    private getHeading;
    private setHeading;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeadingConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeadingConfigComponent, "tb-report-heading-config", never, {}, {}, never, never, false, never>;
}

import { FormGroup } from '@angular/forms';
import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { RichTextReportComponentConfig } from '@shared/models/report-component.models';
import * as i0 from "@angular/core";
export declare class RichTextConfigComponent extends AbstractReportComponentConfig<RichTextReportComponentConfig> {
    settingsTab: 'content' | 'data' | 'layout';
    protected buildForm(reportComponentConfig: RichTextReportComponentConfig): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<RichTextConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RichTextConfigComponent, "tb-report-rich-text-config", never, {}, {}, never, never, false, never>;
}

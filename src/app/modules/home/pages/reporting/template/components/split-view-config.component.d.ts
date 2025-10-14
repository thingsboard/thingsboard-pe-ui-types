import { AbstractReportComponentConfig } from '@home/pages/reporting/template/components/report-component-config.component';
import { SplitViewReportComponentConfig } from '@shared/models/report-component.models';
import { FormGroup } from '@angular/forms';
import * as i0 from "@angular/core";
export declare class SplitViewConfigComponent extends AbstractReportComponentConfig<SplitViewReportComponentConfig> {
    protected buildForm(reportComponentConfig: SplitViewReportComponentConfig): FormGroup;
    static ɵfac: i0.ɵɵFactoryDeclaration<SplitViewConfigComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SplitViewConfigComponent, "tb-split-view-config", never, {}, {}, never, never, false, never>;
}

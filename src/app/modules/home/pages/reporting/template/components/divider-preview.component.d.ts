import { DividerReportComponentConfig } from '@shared/models/report-component.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { AbstractReportComponentPreview } from '@home/pages/reporting/template/components/report-component.component';
import * as i0 from "@angular/core";
export declare class DividerPreviewComponent extends AbstractReportComponentPreview<DividerReportComponentConfig> {
    dividerStyle: ComponentStyle;
    onComponentUpdated(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DividerPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DividerPreviewComponent, "tb-report-divider-preview", never, {}, {}, never, never, false, never>;
}

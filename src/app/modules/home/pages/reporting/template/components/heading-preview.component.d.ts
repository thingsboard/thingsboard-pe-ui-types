import { HeadingReportComponentConfig } from '@shared/models/report-component.models';
import { ComponentStyle } from '@shared/models/widget-settings.models';
import { AbstractReportComponentPreview } from '@home/pages/reporting/template/components/report-component.component';
import * as i0 from "@angular/core";
export declare class HeadingPreviewComponent extends AbstractReportComponentPreview<HeadingReportComponentConfig> {
    headingStyle: ComponentStyle;
    height: string;
    text: string;
    onComponentUpdated(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<HeadingPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<HeadingPreviewComponent, "tb-report-heading-preview", never, {}, {}, never, never, false, never>;
}

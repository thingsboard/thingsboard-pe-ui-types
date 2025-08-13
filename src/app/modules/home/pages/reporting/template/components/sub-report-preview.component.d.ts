import { SubReportReportComponentConfig } from '@shared/models/report-component.models';
import { AbstractReportComponentPreview } from '@home/pages/reporting/template/components/report-component.component';
import { Observable } from 'rxjs';
import { ReportTemplateInfo } from '@shared/models/report.models';
import * as i0 from "@angular/core";
export declare class SubReportPreviewComponent extends AbstractReportComponentPreview<SubReportReportComponentConfig> {
    subReport$: Observable<ReportTemplateInfo>;
    private reportTemplateService;
    private router;
    onComponentUpdated(): void;
    openSubReportNewTab($event: Event, subReport: ReportTemplateInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<SubReportPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<SubReportPreviewComponent, "tb-sub-report-preview", never, {}, {}, never, never, false, never>;
}

import { TbReportFormat } from '@shared/models/report.models';
import { ReportComponentContext } from '@home/pages/reporting/template/components/report-component.models';
import * as i0 from "@angular/core";
export declare class ReportComponentLibraryGroupsComponent {
    reportComponentLibraryGroups: import("@home/pages/reporting/template/components/report-component.models").ReportComponentLibraryGroup[];
    context: ReportComponentContext;
    subReport: boolean;
    format: TbReportFormat;
    filter: string;
    constructor();
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportComponentLibraryGroupsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportComponentLibraryGroupsComponent, "tb-report-component-library-groups", never, { "context": { "alias": "context"; "required": false; }; "subReport": { "alias": "subReport"; "required": false; }; "format": { "alias": "format"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; }, {}, never, never, false, never>;
}

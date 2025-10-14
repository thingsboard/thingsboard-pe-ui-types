import { OnChanges, SimpleChanges } from '@angular/core';
import { TbReportFormat } from '@shared/models/report.models';
import { ReportComponentContext, ReportComponentLibraryGroup } from '@home/pages/reporting/template/components/report-component.models';
import { MatExpansionPanel } from '@angular/material/expansion';
import * as i0 from "@angular/core";
export declare class ReportComponentLibraryGroupComponent implements OnChanges {
    reportComponentLibraryGroupTranslations: Map<ReportComponentLibraryGroup, string>;
    expansionPanel: import("@angular/core").Signal<MatExpansionPanel>;
    context: ReportComponentContext;
    subReport: boolean;
    format: TbReportFormat;
    group: ReportComponentLibraryGroup;
    filter: string;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportComponentLibraryGroupComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportComponentLibraryGroupComponent, "tb-report-component-library-group", never, { "context": { "alias": "context"; "required": false; }; "subReport": { "alias": "subReport"; "required": false; }; "format": { "alias": "format"; "required": false; }; "group": { "alias": "group"; "required": false; }; "filter": { "alias": "filter"; "required": false; }; }, {}, never, never, false, never>;
}

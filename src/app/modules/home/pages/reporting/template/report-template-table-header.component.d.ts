import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { ReportTemplateFilter, ReportTemplateInfo } from '@shared/models/report.models';
import * as i0 from "@angular/core";
export declare class ReportTemplateTableHeaderComponent extends EntityTableHeaderComponent<ReportTemplateInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    reportTemplateFilterChanged(filter: ReportTemplateFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTemplateTableHeaderComponent, "tb-report-template-table-header", never, {}, {}, never, never, false, never>;
}

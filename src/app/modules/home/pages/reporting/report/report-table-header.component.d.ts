import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { ReportFilter, ReportInfo } from '@shared/models/report.models';
import * as i0 from "@angular/core";
export declare class ReportTableHeaderComponent extends EntityTableHeaderComponent<ReportInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    reportFilterChanged(filter: ReportFilter): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ReportTableHeaderComponent, "tb-report-table-header", never, {}, {}, never, never, false, never>;
}

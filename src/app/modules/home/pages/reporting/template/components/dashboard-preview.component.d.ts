import { DashboardReportComponentConfig } from '@shared/models/report-component.models';
import { AbstractReportComponentPreview } from '@home/pages/reporting/template/components/report-component.component';
import { Observable } from 'rxjs';
import { DashboardInfo } from '@shared/models/dashboard.models';
import * as i0 from "@angular/core";
export declare class DashboardPreviewComponent extends AbstractReportComponentPreview<DashboardReportComponentConfig> {
    dashboard$: Observable<DashboardInfo>;
    imageWidth: string;
    imageAlign: string;
    private dashboardService;
    private router;
    onComponentUpdated(): void;
    openDashboardNewTab($event: Event, dashboard: DashboardInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<DashboardPreviewComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<DashboardPreviewComponent, "tb-dashboard-preview", never, {}, {}, never, never, false, never>;
}

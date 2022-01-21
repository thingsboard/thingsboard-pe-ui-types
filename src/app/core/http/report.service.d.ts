import { HttpClient } from '@angular/common/http';
import { UtilsService } from '@core/services/utils.service';
import { ReportParams, ReportType } from '@shared/models/report.models';
import { Timewindow } from '@shared/models/time/time.models';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class ReportService {
    private window;
    private document;
    private utils;
    private http;
    reportView: boolean;
    reportTimewindow: Timewindow;
    constructor(window: Window, document: Document, utils: UtilsService, http: HttpClient);
    loadReportParams(): void;
    downloadDashboardReport(dashboardId: string, reportType: ReportType, state?: string, timewindow?: Timewindow): Observable<any>;
    downloadTestReport(reportConfig: ReportParams, reportsServerEndpointUrl?: string): Observable<any>;
    private downloadReport;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportService>;
}

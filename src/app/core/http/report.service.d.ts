import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Report, ReportInfo, ReportQuery, ReportRequest } from '@shared/models/report.models';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export declare class ReportService {
    private window;
    private document;
    private http;
    constructor(window: Window, document: Document, http: HttpClient);
    getReport(reportId: string, config?: RequestConfig): Observable<Report>;
    deleteReport(reportId: string, config?: RequestConfig): Observable<Object>;
    getReports(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Report>>;
    getReportInfos(query: ReportQuery, config?: RequestConfig): Observable<PageData<ReportInfo>>;
    downloadReport(reportId: string): Observable<any>;
    downloadTestReport(reportRequest: ReportRequest, downloadElseOpen?: boolean): Observable<any>;
    getReportsInfosByIds(reportIds: string[], config?: RequestConfig): Observable<Array<ReportInfo>>;
    private processDownloadReportResponse;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportService>;
}

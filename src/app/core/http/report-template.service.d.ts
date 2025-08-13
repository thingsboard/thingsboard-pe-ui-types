import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { ReportTemplate, ReportTemplateConfig, ReportTemplateInfo, ReportTemplateQuery } from '@shared/models/report.models';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export declare class ReportTemplateService {
    private http;
    constructor(http: HttpClient);
    getReportTemplate<Config extends ReportTemplateConfig>(reportTemplateId: string, config?: RequestConfig): Observable<ReportTemplate<Config>>;
    getReportTemplateInfo(reportTemplateId: string, config?: RequestConfig): Observable<ReportTemplateInfo>;
    saveReportTemplate<Config extends ReportTemplateConfig>(reportTemplate: ReportTemplate<Config>, config?: RequestConfig): Observable<ReportTemplate<Config>>;
    deleteReportTemplate(reportTemplateId: string, config?: RequestConfig): Observable<Object>;
    getAllReportTemplateInfos(query: ReportTemplateQuery, config?: RequestConfig): Observable<PageData<ReportTemplateInfo>>;
    getReportTemplatesByIds(reportTemplateIds: string[], config?: RequestConfig): Observable<Array<ReportTemplateInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportTemplateService>;
}

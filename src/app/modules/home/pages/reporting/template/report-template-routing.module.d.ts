import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import { ReportTemplateService } from '@core/http/report-template.service';
import { ReportTemplatePageComponent } from '@home/pages/reporting/template/report-template-page.component';
import { ReportTemplate } from '@shared/models/report.models';
import * as i0 from "@angular/core";
export declare class ReportTemplateResolver {
    private reportTemplateService;
    constructor(reportTemplateService: ReportTemplateService);
    resolve(route: ActivatedRouteSnapshot): Observable<ReportTemplate>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ReportTemplateResolver>;
}
export declare const reportTemplateBreadcumbLabelFunction: BreadCrumbLabelFunction<ReportTemplatePageComponent>;
export declare const reportTemplatesRoute: Route;
export declare class ReportTemplateRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<ReportTemplateRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<ReportTemplateRoutingModule, never, never, never>;
    static ɵinj: i0.ɵɵInjectorDeclaration<ReportTemplateRoutingModule>;
}

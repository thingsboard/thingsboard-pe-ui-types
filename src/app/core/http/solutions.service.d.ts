import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { SolutionInstallResponse, TenantSolutionTemplateDetails, TenantSolutionTemplateInfo, TenantSolutionTemplateInstructions } from '@shared/models/solution-template.models';
import * as i0 from "@angular/core";
export declare class SolutionsService {
    private http;
    constructor(http: HttpClient);
    getSolutionTemplateInfos(config?: RequestConfig): Observable<Array<TenantSolutionTemplateInfo>>;
    getSolutionTemplateDetails(solutionTemplateId: string, config?: RequestConfig): Observable<TenantSolutionTemplateDetails>;
    getSolutionTemplateInstructions(solutionTemplateId: string, config?: RequestConfig): Observable<TenantSolutionTemplateInstructions>;
    installSolutionTemplate(solutionTemplateId: string, config?: RequestConfig): Observable<SolutionInstallResponse>;
    deleteSolutionTemplate(solutionTemplateId: string, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SolutionsService>;
}

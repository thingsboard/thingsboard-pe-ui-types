import { ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TenantSolutionTemplateDetails, TenantSolutionTemplateInfo } from '@shared/models/solution-template.models';
import { SolutionsService } from '@core/http/solutions.service';
import { SolutionTemplateDetailsComponent } from '@home/pages/solution-template/solution-template-details.component';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class SolutionTemplateInfosResolver {
    private solutionService;
    constructor(solutionService: SolutionsService);
    resolve(): Observable<Array<TenantSolutionTemplateInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionTemplateInfosResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SolutionTemplateInfosResolver>;
}
export declare class SolutionTemplateDetailsResolver {
    private solutionService;
    constructor(solutionService: SolutionsService);
    resolve(route: ActivatedRouteSnapshot): Observable<TenantSolutionTemplateDetails>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionTemplateDetailsResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SolutionTemplateDetailsResolver>;
}
export declare const solutionTemplateBreadcumbLabelFunction: BreadCrumbLabelFunction<SolutionTemplateDetailsComponent>;
export declare class SolutionTemplatesRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<SolutionTemplatesRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<SolutionTemplatesRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<SolutionTemplatesRoutingModule>;
}

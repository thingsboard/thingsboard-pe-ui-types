import { ActivatedRouteSnapshot, CanActivate, Resolve, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import { RuleChainMetaData, RuleChain } from '@shared/models/rule-chain.models';
import { RuleChainService } from '@core/http/rule-chain.service';
import { RuleChainPageComponent } from '@home/pages/rulechain/rulechain-page.component';
import { RuleNodeComponentDescriptor } from '@shared/models/rule-node.models';
import { ItemBufferService } from '@core/public-api';
import { IModulesMap } from '@modules/common/modules-map.models';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class RuleChainResolver implements Resolve<RuleChain> {
    private ruleChainService;
    constructor(ruleChainService: RuleChainService);
    resolve(route: ActivatedRouteSnapshot): Observable<RuleChain>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RuleChainResolver>;
}
export declare class RuleChainMetaDataResolver implements Resolve<RuleChainMetaData> {
    private ruleChainService;
    constructor(ruleChainService: RuleChainService);
    resolve(route: ActivatedRouteSnapshot): Observable<RuleChainMetaData>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainMetaDataResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RuleChainMetaDataResolver>;
}
export declare class RuleNodeComponentsResolver implements Resolve<Array<RuleNodeComponentDescriptor>> {
    private ruleChainService;
    private modulesMap;
    constructor(ruleChainService: RuleChainService, modulesMap: IModulesMap);
    resolve(route: ActivatedRouteSnapshot): Observable<Array<RuleNodeComponentDescriptor>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleNodeComponentsResolver, [null, { optional: true; }]>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RuleNodeComponentsResolver>;
}
export declare class TooltipsterResolver implements Resolve<any> {
    constructor();
    resolve(route: ActivatedRouteSnapshot): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TooltipsterResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TooltipsterResolver>;
}
export declare class RuleChainImportGuard implements CanActivate {
    private itembuffer;
    private router;
    constructor(itembuffer: ItemBufferService, router: Router);
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainImportGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RuleChainImportGuard>;
}
export declare const ruleChainBreadcumbLabelFunction: BreadCrumbLabelFunction<RuleChainPageComponent>;
export declare const importRuleChainBreadcumbLabelFunction: BreadCrumbLabelFunction<RuleChainPageComponent>;
export declare class RuleChainRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleChainRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<RuleChainRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<RuleChainRoutingModule>;
}

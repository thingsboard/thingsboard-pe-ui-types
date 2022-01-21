import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminSettings, MailTemplatesSettings } from '@shared/models/settings.models';
import { AdminService } from '@core/http/admin.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { CustomTranslation } from '@shared/models/custom-translation.model';
import { CustomTranslationService } from '@core/http/custom-translation.service';
import { CustomMenu } from '@shared/models/custom-menu.models';
import { CustomMenuService } from '@core/http/custom-menu.service';
import { OAuth2Service } from '@core/http/oauth2.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class MailTemplateSettingsResolver implements Resolve<AdminSettings<MailTemplatesSettings>> {
    private adminService;
    private store;
    constructor(adminService: AdminService, store: Store<AppState>);
    resolve(route: ActivatedRouteSnapshot): Observable<AdminSettings<MailTemplatesSettings>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<MailTemplateSettingsResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MailTemplateSettingsResolver>;
}
export declare class CustomTranslationResolver implements Resolve<CustomTranslation> {
    private customTranslationService;
    constructor(customTranslationService: CustomTranslationService);
    resolve(route: ActivatedRouteSnapshot): Observable<CustomTranslation>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTranslationResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomTranslationResolver>;
}
export declare class CustomMenuResolver implements Resolve<CustomMenu> {
    private customMenuService;
    constructor(customMenuService: CustomMenuService);
    resolve(route: ActivatedRouteSnapshot): Observable<CustomMenu>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomMenuResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomMenuResolver>;
}
export declare class OAuth2LoginProcessingUrlResolver implements Resolve<string> {
    private oauth2Service;
    constructor(oauth2Service: OAuth2Service);
    resolve(): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OAuth2LoginProcessingUrlResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OAuth2LoginProcessingUrlResolver>;
}
export declare class AdminRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AdminRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AdminRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AdminRoutingModule>;
}

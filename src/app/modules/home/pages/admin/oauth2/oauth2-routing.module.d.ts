import { Routes } from '@angular/router';
import { OAuth2Service } from '@core/http/oauth2.service';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class OAuth2LoginProcessingUrlResolver {
    private oauth2Service;
    constructor(oauth2Service: OAuth2Service);
    resolve(): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OAuth2LoginProcessingUrlResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OAuth2LoginProcessingUrlResolver>;
}
export declare const oAuth2Routes: Routes;
export declare class Oauth2RoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<Oauth2RoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<Oauth2RoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<Oauth2RoutingModule>;
}

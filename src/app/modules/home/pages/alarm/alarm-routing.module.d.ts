import { Observable } from 'rxjs';
import { OAuth2Service } from '@core/http/oauth2.service';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
export declare class OAuth2LoginProcessingUrlResolver {
    private oauth2Service;
    constructor(oauth2Service: OAuth2Service);
    resolve(): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OAuth2LoginProcessingUrlResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OAuth2LoginProcessingUrlResolver>;
}
export declare class AlarmRoutingModule {
    static ɵfac: i0.ɵɵFactoryDeclaration<AlarmRoutingModule, never>;
    static ɵmod: i0.ɵɵNgModuleDeclaration<AlarmRoutingModule, never, [typeof i1.RouterModule], [typeof i1.RouterModule]>;
    static ɵinj: i0.ɵɵInjectorDeclaration<AlarmRoutingModule>;
}

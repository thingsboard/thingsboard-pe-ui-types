import { NgZone } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SystemSetupService } from '@core/http/system-setup.service';
import { Observable } from 'rxjs';
import { AuthService } from '@core/auth/auth.service';
import { AuthState } from '@core/auth/auth.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class SetupGuard {
    private store;
    private systemSetupService;
    private authService;
    private zone;
    constructor(store: Store<AppState>, systemSetupService: SystemSetupService, authService: AuthService, zone: NgZone);
    getAuthState(): Observable<AuthState>;
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Observable<import("@angular/router").UrlTree>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SetupGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SetupGuard>;
}

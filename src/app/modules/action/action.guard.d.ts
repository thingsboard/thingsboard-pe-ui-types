import { NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthState } from '@core/auth/auth.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import { NotificationService } from '@core/http/notification.service';
import { AuthService } from '@core/auth/auth.service';
import * as i0 from "@angular/core";
export declare class ActionGuard {
    private store;
    private zone;
    private authService;
    private dialogs;
    private translate;
    private route;
    private notificationService;
    constructor(store: Store<AppState>, zone: NgZone, authService: AuthService, dialogs: DialogService, translate: TranslateService, route: ActivatedRoute, notificationService: NotificationService);
    getAuthState(): Observable<AuthState>;
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | import("@angular/router").UrlTree>;
    performEntitiesLimitIncreaseRequest(authState: AuthState, route: ActivatedRouteSnapshot): Observable<any>;
    performAddonAccessError(authState: AuthState, route: ActivatedRouteSnapshot): Observable<any>;
    private extractPath;
    private getLastChild;
    static ɵfac: i0.ɵɵFactoryDeclaration<ActionGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ActionGuard>;
}

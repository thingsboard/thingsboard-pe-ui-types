import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { DialogService } from '@core/services/dialog.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export interface HasConfirmForm {
    confirmForm(): FormGroup;
}
export interface HasDirtyFlag {
    isDirty: boolean;
}
export declare class ConfirmOnExitGuard implements CanDeactivate<HasConfirmForm & HasDirtyFlag> {
    private store;
    private dialogService;
    private translate;
    constructor(store: Store<AppState>, dialogService: DialogService, translate: TranslateService);
    canDeactivate(component: HasConfirmForm & HasDirtyFlag, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | import("rxjs").Observable<boolean>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ConfirmOnExitGuard, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ConfirmOnExitGuard>;
}

import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { MobileAppBundleInfo } from '@shared/models/mobile-app.models';
import { ActivatedRouteSnapshot } from '@angular/router';
import { DatePipe } from '@angular/common';
import { MobileAppService } from '@core/http/mobile-app.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class MobileBundleTableConfigResolver {
    private datePipe;
    private mobileAppService;
    private translate;
    private dialog;
    private store;
    private userPermissionsService;
    private readonly config;
    constructor(datePipe: DatePipe, mobileAppService: MobileAppService, translate: TranslateService, dialog: MatDialog, store: Store<AppState>, userPermissionsService: UserPermissionsService);
    resolve(_route: ActivatedRouteSnapshot): EntityTableConfig<MobileAppBundleInfo>;
    private configureCellActions;
    private editBundle;
    private onBundleAction;
    private configurationApp;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileBundleTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MobileBundleTableConfigResolver>;
}

import { ActivatedRouteSnapshot } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MobileAppService } from '@core/http/mobile-app.service';
import { MobileApp } from '@shared/models/mobile-app.models';
import { TruncatePipe } from '@shared/pipe/truncate.pipe';
import { MatDialog } from '@angular/material/dialog';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class MobileAppTableConfigResolver {
    private translate;
    private datePipe;
    private mobileAppService;
    private truncatePipe;
    private dialog;
    private userPermissionsService;
    private readonly config;
    constructor(translate: TranslateService, datePipe: DatePipe, mobileAppService: MobileAppService, truncatePipe: TruncatePipe, dialog: MatDialog, userPermissionsService: UserPermissionsService);
    resolve(_route: ActivatedRouteSnapshot): EntityTableConfig<MobileApp>;
    private configureCellActions;
    private deleteEntity;
    private mobileStatus;
    private mobileStatusStyle;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MobileAppTableConfigResolver>;
}

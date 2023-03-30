import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { NotificationTarget } from '@shared/models/notification.models';
import { NotificationService } from '@core/http/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class RecipientTableConfigResolver implements Resolve<EntityTableConfig<NotificationTarget>> {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private userPermissionsService;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe, userPermissionsService: UserPermissionsService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<NotificationTarget>;
    private configureCellActions;
    private editTarget;
    private onTargetAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<RecipientTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RecipientTableConfigResolver>;
}

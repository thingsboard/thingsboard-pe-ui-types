import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { NotificationRule } from '@shared/models/notification.models';
import { NotificationService } from '@core/http/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class RuleTableConfigResolver implements Resolve<EntityTableConfig<NotificationRule>> {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private userPermissionsService;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe, userPermissionsService: UserPermissionsService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<NotificationRule>;
    private configureCellActions;
    private editRule;
    private onTargetAction;
    private toggleEnableMode;
    static ɵfac: i0.ɵɵFactoryDeclaration<RuleTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<RuleTableConfigResolver>;
}

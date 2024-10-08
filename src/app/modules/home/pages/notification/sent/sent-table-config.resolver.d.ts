import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { NotificationRequest, NotificationRequestInfo } from '@shared/models/notification.models';
import { NotificationService } from '@core/http/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { DatePipe } from '@angular/common';
import { PageLink } from '@shared/models/page/page-link';
import { ActivatedRouteSnapshot } from '@angular/router';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class SentTableConfigResolver {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private userPermissionsService;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe, userPermissionsService: UserPermissionsService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<NotificationRequest, PageLink, NotificationRequestInfo>;
    private configureCellActions;
    private createRequest;
    private onRequestAction;
    private requestStatus;
    private requestStats;
    private requestStatusStyle;
    private openStatsErrorDialog;
    static ɵfac: i0.ɵɵFactoryDeclaration<SentTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SentTableConfigResolver>;
}

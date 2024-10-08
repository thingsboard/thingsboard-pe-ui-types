import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { DatePipe } from '@angular/common';
import { Notification } from '@shared/models/notification.models';
import { NotificationService } from '@core/http/notification.service';
import { TranslateService } from '@ngx-translate/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot } from '@angular/router';
import { UtilsService } from '@core/services/utils.service';
import * as i0 from "@angular/core";
export declare class InboxTableConfigResolver {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private utilsService;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe, utilsService: UtilsService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<Notification>;
    private configureCellActions;
    private markAllRead;
    private markAsRead;
    private showNotification;
    static ɵfac: i0.ɵɵFactoryDeclaration<InboxTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<InboxTableConfigResolver>;
}

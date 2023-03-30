import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { NotificationTemplate } from '@shared/models/notification.models';
import { NotificationService } from '@core/http/notification.service';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { DatePipe } from '@angular/common';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class TemplateTableConfigResolver implements Resolve<EntityTableConfig<NotificationTemplate>> {
    private notificationService;
    private translate;
    private dialog;
    private datePipe;
    private userPermissionsService;
    private readonly config;
    constructor(notificationService: NotificationService, translate: TranslateService, dialog: MatDialog, datePipe: DatePipe, userPermissionsService: UserPermissionsService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<NotificationTemplate>;
    private configureCellActions;
    private editTemplate;
    private onTemplateAction;
    static ɵfac: i0.ɵɵFactoryDeclaration<TemplateTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TemplateTableConfigResolver>;
}

import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { Integration, IntegrationInfo, IntegrationParams } from '@shared/models/integration.models';
import { IntegrationService } from '@core/http/integration.service';
import { UtilsService } from '@core/services/utils.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EdgeService } from '@core/http/edge.service';
import { DialogService } from '@core/services/dialog.service';
import { MatDialog } from '@angular/material/dialog';
import { PageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class IntegrationsTableConfigResolver implements Resolve<EntityTableConfig<Integration, PageLink, IntegrationInfo>> {
    private integrationService;
    private userPermissionsService;
    private edgeService;
    private translate;
    private datePipe;
    private router;
    private utils;
    private dialogService;
    private dialog;
    constructor(integrationService: IntegrationService, userPermissionsService: UserPermissionsService, edgeService: EdgeService, translate: TranslateService, datePipe: DatePipe, router: Router, utils: UtilsService, dialogService: DialogService, dialog: MatDialog);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<Integration, PageLink, IntegrationInfo>;
    resolveIntegrationsTableConfig(params: IntegrationParams): EntityTableConfig<Integration, PageLink, IntegrationInfo>;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IntegrationsTableConfigResolver>;
}

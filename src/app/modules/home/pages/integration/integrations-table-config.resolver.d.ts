import { Resolve, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { Integration } from '@shared/models/integration.models';
import { IntegrationService } from '@core/http/integration.service';
import { UtilsService } from '@core/services/utils.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class IntegrationsTableConfigResolver implements Resolve<EntityTableConfig<Integration>> {
    private integrationService;
    private userPermissionsService;
    private translate;
    private datePipe;
    private router;
    private utils;
    private readonly config;
    constructor(integrationService: IntegrationService, userPermissionsService: UserPermissionsService, translate: TranslateService, datePipe: DatePipe, router: Router, utils: UtilsService);
    resolve(): EntityTableConfig<Integration>;
    openIntegration($event: Event, integration: Integration): void;
    onIntegrationAction(action: EntityAction<Integration>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationsTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<IntegrationsTableConfigResolver>;
}

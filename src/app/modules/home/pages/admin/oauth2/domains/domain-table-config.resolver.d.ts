import { ActivatedRouteSnapshot } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { DomainInfo } from '@shared/models/oauth2.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { DomainService } from '@app/core/http/domain.service';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class DomainTableConfigResolver {
    private translate;
    private datePipe;
    private domainService;
    private userPermissionsService;
    private readonly config;
    constructor(translate: TranslateService, datePipe: DatePipe, domainService: DomainService, userPermissionsService: UserPermissionsService);
    resolve(_route: ActivatedRouteSnapshot): EntityTableConfig<DomainInfo>;
    private toggleEnableOAuth;
    private togglePropagateToEdge;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomainTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DomainTableConfigResolver>;
}

import { ActivatedRouteSnapshot } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { DomainInfo } from '@shared/models/oauth2.models';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { DomainService } from '@app/core/http/domain.service';
import * as i0 from "@angular/core";
export declare class DomainTableConfigResolver {
    private translate;
    private datePipe;
    private utilsService;
    private domainService;
    private readonly config;
    constructor(translate: TranslateService, datePipe: DatePipe, utilsService: UtilsService, domainService: DomainService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<DomainInfo>;
    private toggleEnableOAuth;
    private togglePropagateToEdge;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomainTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DomainTableConfigResolver>;
}

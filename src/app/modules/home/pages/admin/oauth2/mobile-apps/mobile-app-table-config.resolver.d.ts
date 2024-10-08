import { ActivatedRouteSnapshot } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { MobileAppInfo } from '@shared/models/oauth2.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { MobileAppService } from '@core/http/mobile-app.service';
import * as i0 from "@angular/core";
export declare class MobileAppTableConfigResolver {
    private translate;
    private datePipe;
    private mobileAppService;
    private readonly config;
    constructor(translate: TranslateService, datePipe: DatePipe, mobileAppService: MobileAppService);
    resolve(route: ActivatedRouteSnapshot): EntityTableConfig<MobileAppInfo>;
    private toggleEnableOAuth;
    private appSecretText;
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<MobileAppTableConfigResolver>;
}

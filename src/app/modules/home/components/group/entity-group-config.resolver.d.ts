import { Injector } from '@angular/core';
import { EntityGroupService } from '@core/http/entity-group.service';
import { CustomerService } from '@core/http/customer.service';
import { EntityGroupInfo, EntityGroupParams } from '@shared/models/entity-group.models';
import { Observable } from 'rxjs';
import { EntityGroupStateInfo } from '@home/models/group/group-entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { EdgeService } from '@core/http/edge.service';
import * as i0 from "@angular/core";
export declare class EntityGroupConfigResolver {
    private entityGroupService;
    private customerService;
    private edgeService;
    private translate;
    private injector;
    constructor(entityGroupService: EntityGroupService, customerService: CustomerService, edgeService: EdgeService, translate: TranslateService, injector: Injector);
    constructGroupConfigByStateParams<T>(params: EntityGroupParams): Observable<EntityGroupStateInfo<T>>;
    constructGroupConfig<T>(params: EntityGroupParams, entityGroup: EntityGroupInfo): Observable<EntityGroupStateInfo<T>>;
    private resolveParentGroupInfo;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityGroupConfigResolver>;
}

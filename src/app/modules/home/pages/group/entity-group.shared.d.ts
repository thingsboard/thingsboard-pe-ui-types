import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { EntityGroupStateInfo } from '@home/models/group/group-entities-table-config.models';
import { EntityGroupConfigResolver } from '@home/components/group/entity-group-config.resolver';
import { Observable } from 'rxjs';
import { BreadCrumbLabelFunction } from '@shared/components/breadcrumb';
import { GroupEntitiesTableComponent } from '@home/components/group/group-entities-table.component';
import * as i0 from "@angular/core";
export declare class EntityGroupResolver<T> implements Resolve<EntityGroupStateInfo<T>> {
    private entityGroupConfigResolver;
    constructor(entityGroupConfigResolver: EntityGroupConfigResolver);
    resolve(route: ActivatedRouteSnapshot): Observable<EntityGroupStateInfo<T>> | EntityGroupStateInfo<T>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupResolver<any>, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityGroupResolver<any>>;
}
export declare const groupEntitiesLabelFunction: BreadCrumbLabelFunction<GroupEntitiesTableComponent>;

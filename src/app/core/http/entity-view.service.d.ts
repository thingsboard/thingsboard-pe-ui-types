import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntitySubtype } from '@app/shared/models/entity-type.models';
import { EntityView, EntityViewInfo, EntityViewSearchQuery } from '@app/shared/models/entity-view.models';
import * as i0 from "@angular/core";
export declare class EntityViewService {
    private http;
    constructor(http: HttpClient);
    getTenantEntityViewInfos(pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EntityViewInfo>>;
    getCustomerEntityViewInfos(customerId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EntityViewInfo>>;
    getEntityView(entityViewId: string, config?: RequestConfig): Observable<EntityView>;
    getEntityViewInfo(entityViewId: string, config?: RequestConfig): Observable<EntityViewInfo>;
    saveEntityView(entityView: EntityView, config?: RequestConfig): Observable<EntityView>;
    deleteEntityView(entityViewId: string, config?: RequestConfig): Observable<Object>;
    getEntityViewTypes(config?: RequestConfig): Observable<Array<EntitySubtype>>;
    makeEntityViewPublic(entityViewId: string, config?: RequestConfig): Observable<EntityView>;
    assignEntityViewToCustomer(customerId: string, entityViewId: string, config?: RequestConfig): Observable<EntityView>;
    unassignEntityViewFromCustomer(entityViewId: string, config?: RequestConfig): Observable<Object>;
    findByQuery(query: EntityViewSearchQuery, config?: RequestConfig): Observable<Array<EntityView>>;
    assignEntityViewToEdge(edgeId: string, entityViewId: string, config?: RequestConfig): Observable<EntityView>;
    unassignEntityViewFromEdge(edgeId: string, entityViewId: string, config?: RequestConfig): Observable<Object>;
    getEdgeEntityViews(edgeId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EntityViewInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityViewService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityViewService>;
}

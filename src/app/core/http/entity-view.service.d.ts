import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { EntitySubtype } from '@app/shared/models/entity-type.models';
import { EntityView, EntityViewInfo, EntityViewSearchQuery } from '@app/shared/models/entity-view.models';
import { SaveEntityWithGroupParams } from '@shared/models/entity.models';
import * as i0 from "@angular/core";
export declare class EntityViewService {
    private http;
    constructor(http: HttpClient);
    getTenantEntityViews(pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EntityView>>;
    getCustomerEntityViews(customerId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EntityView>>;
    getEntityView(entityViewId: string, config?: RequestConfig): Observable<EntityView>;
    getEntityViews(entityViewIds: Array<string>, config?: RequestConfig): Observable<Array<EntityView>>;
    getUserEntityViews(pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EntityView>>;
    getAllEntityViewInfos(includeCustomers: boolean, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EntityViewInfo>>;
    getCustomerEntityViewInfos(includeCustomers: boolean, customerId: string, pageLink: PageLink, type?: string, config?: RequestConfig): Observable<PageData<EntityViewInfo>>;
    getEntityViewInfo(entityViewId: string, config?: RequestConfig): Observable<EntityViewInfo>;
    saveEntityView(entityView: EntityView, entityGroupIds?: string | string[], config?: RequestConfig): Observable<EntityView>;
    saveEntityView(entityView: EntityView, saveParams?: SaveEntityWithGroupParams, config?: RequestConfig): Observable<EntityView>;
    deleteEntityView(entityViewId: string, config?: RequestConfig): Observable<Object>;
    getEntityViewTypes(config?: RequestConfig): Observable<Array<EntitySubtype>>;
    findByQuery(query: EntityViewSearchQuery, config?: RequestConfig): Observable<Array<EntityView>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityViewService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<EntityViewService>;
}

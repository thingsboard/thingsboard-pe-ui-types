import { RequestConfig } from './http-utils';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { Tenant, TenantInfo } from '@shared/models/tenant.model';
import * as i0 from "@angular/core";
export declare class TenantService {
    private http;
    constructor(http: HttpClient);
    getTenants(pageLink: PageLink, config?: RequestConfig): Observable<PageData<Tenant>>;
    getTenantInfos(pageLink: PageLink, config?: RequestConfig): Observable<PageData<TenantInfo>>;
    getTenant(tenantId: string, config?: RequestConfig): Observable<Tenant>;
    getTenantInfo(tenantId: string, config?: RequestConfig): Observable<TenantInfo>;
    saveTenant(tenant: Tenant, config?: RequestConfig): Observable<Tenant>;
    deleteTenant(tenantId: string, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TenantService>;
}

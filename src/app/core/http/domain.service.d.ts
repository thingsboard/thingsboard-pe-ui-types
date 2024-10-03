import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { Domain, DomainInfo } from '@shared/models/oauth2.models';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export declare class DomainService {
    private http;
    constructor(http: HttpClient);
    saveDomain(domain: Domain, oauth2ClientIds: Array<string>, config?: RequestConfig): Observable<Domain>;
    updateOauth2Clients(id: string, oauth2ClientIds: Array<string>, config?: RequestConfig): Observable<void>;
    getTenantDomainInfos(pageLink: PageLink, config?: RequestConfig): Observable<PageData<DomainInfo>>;
    getDomainInfoById(id: string, config?: RequestConfig): Observable<DomainInfo>;
    deleteDomain(id: string, config?: RequestConfig): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<DomainService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<DomainService>;
}

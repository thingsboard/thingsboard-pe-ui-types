import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { OAuth2Client, OAuth2ClientInfo, OAuth2ClientRegistrationTemplate } from '@shared/models/oauth2.models';
import { PageData } from '@shared/models/page/page-data';
import { PageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class OAuth2Service {
    private http;
    constructor(http: HttpClient);
    getOAuth2Template(config?: RequestConfig): Observable<Array<OAuth2ClientRegistrationTemplate>>;
    saveOAuth2Client(oAuth2Client: OAuth2Client, config?: RequestConfig): Observable<OAuth2Client>;
    findTenantOAuth2ClientInfos(pageLink: PageLink, config?: RequestConfig): Observable<PageData<OAuth2ClientInfo>>;
    findTenantOAuth2ClientInfosByIds(clientIds: Array<string>, config?: RequestConfig): Observable<Array<OAuth2ClientInfo>>;
    getOAuth2ClientById(id: string, config?: RequestConfig): Observable<OAuth2Client>;
    deleteOauth2Client(id: string, config?: RequestConfig): Observable<void>;
    getLoginProcessingUrl(config?: RequestConfig): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OAuth2Service, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OAuth2Service>;
}

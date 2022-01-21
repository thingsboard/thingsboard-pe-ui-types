import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { OAuth2ClientRegistrationTemplate, OAuth2Info } from '@shared/models/oauth2.models';
import * as i0 from "@angular/core";
export declare class OAuth2Service {
    private http;
    constructor(http: HttpClient);
    getOAuth2Settings(config?: RequestConfig): Observable<OAuth2Info>;
    getOAuth2Template(config?: RequestConfig): Observable<Array<OAuth2ClientRegistrationTemplate>>;
    saveOAuth2Settings(OAuth2Setting: OAuth2Info, config?: RequestConfig): Observable<OAuth2Info>;
    getLoginProcessingUrl(config?: RequestConfig): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<OAuth2Service, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<OAuth2Service>;
}

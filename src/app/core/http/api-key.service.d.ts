import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import { ApiKeyInfo, ApiKey } from '@shared/models/api-key.models';
import * as i0 from "@angular/core";
export declare class ApiKeyService {
    private http;
    constructor(http: HttpClient);
    saveApiKey(apiKey: ApiKeyInfo, config?: RequestConfig): Observable<ApiKey>;
    deleteApiKey(id: string, config?: RequestConfig): Observable<void>;
    updateApiKeyDescription(id: string, description: string, config?: RequestConfig): Observable<ApiKeyInfo>;
    enableApiKey(id: string, enabledValue: boolean, config?: RequestConfig): Observable<ApiKeyInfo>;
    getUserApiKeys(userId: string, pageLink: PageLink, config?: RequestConfig): Observable<PageData<ApiKeyInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ApiKeyService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ApiKeyService>;
}

import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { SecretStorage, SecretStorageInfo } from '@shared/models/secret-storage.models';
import * as i0 from "@angular/core";
export declare class SecretStorageService {
    private http;
    constructor(http: HttpClient);
    getSecrets(pageLink: PageLink, config?: RequestConfig): Observable<PageData<SecretStorage>>;
    saveSecret(secret: SecretStorageInfo, config?: RequestConfig): Observable<SecretStorage>;
    deleteSecret(secretId: string, config?: RequestConfig): Observable<Object>;
    updateSecretDescription(secretId: string, description: string, config?: RequestConfig): Observable<void>;
    updateSecretValue(secretId: string, value: string, config?: RequestConfig): Observable<void>;
    getSecretByName(name: string, config?: RequestConfig): Observable<SecretStorage>;
    static ɵfac: i0.ɵɵFactoryDeclaration<SecretStorageService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<SecretStorageService>;
}

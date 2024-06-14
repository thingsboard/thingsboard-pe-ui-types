import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomTranslationEditData, TranslationInfo } from '@shared/models/custom-translation.model';
import { RequestConfig } from '@core/http/http-utils';
import { ResourcesService } from '@core/services/resources.service';
import * as i0 from "@angular/core";
export declare class CustomTranslationService {
    private http;
    private resourcesService;
    constructor(http: HttpClient, resourcesService: ResourcesService);
    getAvailableLocales(config?: RequestConfig): Observable<{
        [k: string]: string;
    }>;
    getAvailableJavaLocales(config?: RequestConfig): Observable<{
        [k: string]: string;
    }>;
    getTranslationInfos(config?: RequestConfig): Observable<Array<TranslationInfo>>;
    getTranslationForBasicEdit(localeCode: string, config?: RequestConfig): Observable<CustomTranslationEditData>;
    getFullTranslation(localeCode: string, config?: RequestConfig): Observable<object>;
    downloadFullTranslation(localeCode: string, config?: RequestConfig): Observable<object>;
    deleteCustomTranslation(localeCode: string, config?: RequestConfig): Observable<void>;
    deleteCustomTranslationKey(localesCode: string, key: string, config?: RequestConfig): Observable<void>;
    saveCustomTranslation(localeCode: string, customTranslationValue: object, config?: RequestConfig): Observable<void>;
    getCustomTranslation(localeCode: string, config?: RequestConfig): Observable<object>;
    patchCustomTranslation(localeCode: string, newCustomTranslation: object, config?: RequestConfig): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTranslationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomTranslationService>;
}

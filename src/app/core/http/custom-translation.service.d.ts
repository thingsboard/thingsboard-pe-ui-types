import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomTranslation } from '@shared/models/custom-translation.model';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class CustomTranslationService {
    private window;
    private document;
    private http;
    private translate;
    private updateTranslationSubjects;
    private translateLoadObservable;
    private translationMap;
    private prevTranslationMap;
    private modifyLang;
    constructor(window: Window, document: Document, http: HttpClient, translate: TranslateService);
    private loadCustomTranslation;
    updateCustomTranslations(forceUpdate?: boolean): Observable<any>;
    private deletePropertyWithObject;
    private resetTranslation;
    getCurrentCustomTranslation(): Observable<CustomTranslation>;
    saveCustomTranslation(customTranslation: CustomTranslation): Observable<any>;
    downloadLocaleJson(langKey: string): Observable<any>;
    private downloadJson;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomTranslationService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomTranslationService>;
}

import { TranslateService, TranslateStore } from '@ngx-translate/core';
import { Observable } from 'rxjs';
export declare function updateUserLang(translate: TranslateService, translateStore: TranslateStore, document: Document, userLang: string, translations?: any, reload?: boolean): Observable<any>;

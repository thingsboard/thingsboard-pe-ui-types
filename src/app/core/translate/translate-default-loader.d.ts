import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import * as i0 from "@angular/core";
export declare class TranslateDefaultLoader implements TranslateLoader {
    private http;
    isAuthenticated: boolean;
    constructor(http: HttpClient);
    getTranslation(lang: string): Observable<object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TranslateDefaultLoader, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TranslateDefaultLoader>;
}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class UiSettingsService {
    private http;
    private helpBaseUrlObservable;
    constructor(http: HttpClient);
    getHelpBaseUrl(): Observable<string>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UiSettingsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UiSettingsService>;
}

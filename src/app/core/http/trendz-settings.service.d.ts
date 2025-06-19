import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { TrendzSettings } from '@shared/models/trendz-settings.models';
import { RequestConfig } from '@core/http/http-utils';
import * as i0 from "@angular/core";
export declare class TrendzSettingsService {
    private http;
    constructor(http: HttpClient);
    getTrendzSettings(config?: RequestConfig): Observable<TrendzSettings>;
    saveTrendzSettings(trendzSettings: TrendzSettings, config?: RequestConfig): Observable<TrendzSettings>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendzSettingsService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TrendzSettingsService>;
}

import { HttpClient } from '@angular/common/http';
import { TrendzConfiguration, TrendzHealthcheckResult, TrendzSummary, TrendzSynchronization } from '@app/shared/models/trendz-analytics.models';
import { Observable } from 'rxjs';
import { RequestConfig } from '@core/http/http-utils';
import * as i0 from "@angular/core";
export declare class TrendzService {
    private http;
    constructor(http: HttpClient);
    getTrendzSummary(config?: RequestConfig): Observable<TrendzSummary>;
    performTrendzHealthcheck(config?: RequestConfig): Observable<TrendzHealthcheckResult>;
    getTrendzConfig(config?: RequestConfig): Observable<TrendzConfiguration>;
    saveTrendzConfig(trendzConfig: TrendzConfiguration, config?: RequestConfig): Observable<TrendzConfiguration>;
    getTrendzSyncResult(config?: RequestConfig): Observable<TrendzSynchronization>;
    connectToTrendz(config?: RequestConfig): Observable<TrendzSynchronization>;
    static ɵfac: i0.ɵɵFactoryDeclaration<TrendzService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<TrendzService>;
}

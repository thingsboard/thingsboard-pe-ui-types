import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { UsageInfo } from '@shared/models/usage.models';
import * as i0 from "@angular/core";
export declare class UsageInfoService {
    private http;
    constructor(http: HttpClient);
    getUsageInfo(config?: RequestConfig): Observable<UsageInfo>;
    static ɵfac: i0.ɵɵFactoryDeclaration<UsageInfoService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<UsageInfoService>;
}

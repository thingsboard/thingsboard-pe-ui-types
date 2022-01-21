import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { ServiceType } from '@shared/models/queue.models';
import * as i0 from "@angular/core";
export declare class QueueService {
    private http;
    constructor(http: HttpClient);
    getTenantQueuesByServiceType(serviceType: ServiceType, config?: RequestConfig): Observable<Array<string>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueueService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QueueService>;
}

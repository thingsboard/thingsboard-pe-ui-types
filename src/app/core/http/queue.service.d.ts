import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { QueueInfo, QueueStatisticsInfo, ServiceType } from '@shared/models/queue.models';
import { PageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export declare class QueueService {
    private http;
    constructor(http: HttpClient);
    getQueueById(queueId: string, config?: RequestConfig): Observable<QueueInfo>;
    getQueueByName(queueName: string, config?: RequestConfig): Observable<QueueInfo>;
    getTenantQueuesByServiceType(pageLink: PageLink, serviceType: ServiceType, config?: RequestConfig): Observable<PageData<QueueInfo>>;
    saveQueue(queue: QueueInfo, serviceType: ServiceType, config?: RequestConfig): Observable<QueueInfo>;
    deleteQueue(queueId: string): Observable<Object>;
    private parseQueueStatName;
    getQueueStatistics(pageLink: PageLink, config?: RequestConfig): Observable<PageData<QueueStatisticsInfo>>;
    getQueueStatisticsById(queueStatId: string, config?: RequestConfig): Observable<QueueStatisticsInfo>;
    getQueueStatisticsByIds(queueStatIds: Array<string>, config?: RequestConfig): Observable<Array<QueueStatisticsInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<QueueService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<QueueService>;
}

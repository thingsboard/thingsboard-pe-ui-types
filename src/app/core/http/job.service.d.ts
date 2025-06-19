import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Job, JobQuery } from '@shared/models/job.models';
import { RequestConfig } from '@core/http/http-utils';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export declare class JobService {
    private http;
    constructor(http: HttpClient);
    getJobById(id: string, config?: RequestConfig): Observable<Job>;
    getJobs(query: JobQuery, config?: RequestConfig): Observable<PageData<Job>>;
    cancelJob(id: string, config?: RequestConfig): Observable<void>;
    reprocessJob(id: string, config?: RequestConfig): Observable<void>;
    deleteJob(id: string, config?: RequestConfig): Observable<void>;
    static ɵfac: i0.ɵɵFactoryDeclaration<JobService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<JobService>;
}

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AiResourceConfig, AiResourceInfo } from '@shared/models/ai-chat.models';
import * as i0 from "@angular/core";
export type AiResourceUploadEvent = {
    type: 'progress';
    progress: number;
} | {
    type: 'done';
    resource: AiResourceInfo;
};
export declare class AiResourceService {
    private http;
    private config$;
    private readonly urls;
    private readonly waitingFetches;
    private activeFetches;
    constructor(http: HttpClient);
    getConfig(): Observable<AiResourceConfig | null>;
    upload(file: File): Observable<AiResourceUploadEvent>;
    delete(resourceId: string): Observable<void>;
    rememberUrl(resourceId: string, url: string, size: number): void;
    getUrl(resourceId: string): Observable<string>;
    download(resource: AiResourceInfo): Observable<void>;
    private save;
    private fetch;
    private readErrorBody;
    private forget;
    private release;
    private evict;
    static ɵfac: i0.ɵɵFactoryDeclaration<AiResourceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<AiResourceService>;
}

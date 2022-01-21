import { HttpClient } from '@angular/common/http';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { BlobEntityInfo, BlobEntityWithCustomerInfo } from '@shared/models/blob-entity.models';
import { TimePageLink } from '@shared/models/page/page-link';
import { PageData } from '@shared/models/page/page-data';
import * as i0 from "@angular/core";
export declare class BlobEntityService {
    private window;
    private document;
    private http;
    constructor(window: Window, document: Document, http: HttpClient);
    getBlobEntityInfo(blobEntityId: string, config?: RequestConfig): Observable<BlobEntityWithCustomerInfo>;
    getBlobEntities(pageLink: TimePageLink, type?: string, config?: RequestConfig): Observable<PageData<BlobEntityWithCustomerInfo>>;
    getBlobEntitiesByIds(blobEntityIds: Array<string>, config?: RequestConfig): Observable<Array<BlobEntityInfo>>;
    deleteBlobEntity(blobEntityId: string, config?: RequestConfig): Observable<Object>;
    downloadBlobEntity(blobEntityId: string): Observable<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<BlobEntityService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<BlobEntityService>;
}

import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { Resource, ResourceInfo, ResourceSubType, ResourceType, TBResourceScope } from '@shared/models/resource.models';
import { ResourcesService } from '@core/services/resources.service';
import * as i0 from "@angular/core";
export declare class ResourceService {
    private http;
    private resourcesService;
    constructor(http: HttpClient, resourcesService: ResourcesService);
    getResources(pageLink: PageLink, resourceType?: ResourceType, resourceSubType?: ResourceSubType, config?: RequestConfig): Observable<PageData<ResourceInfo>>;
    getTenantResources(pageLink: PageLink, config?: RequestConfig): Observable<PageData<ResourceInfo>>;
    getResource(resourceId: string, config?: RequestConfig): Observable<Resource>;
    getResourceInfoById(resourceId: string, config?: RequestConfig): Observable<ResourceInfo>;
    getResourceInfo(type: ResourceType, scope: TBResourceScope, key: string, config?: RequestConfig): Observable<ResourceInfo>;
    downloadResource(resourceId: string): Observable<any>;
    saveResources(resources: Resource[], config?: RequestConfig): Observable<Resource[]>;
    saveResource(resource: Resource, config?: RequestConfig): Observable<Resource>;
    uploadResources(resources: Resource[], config?: RequestConfig): Observable<Resource[]>;
    uploadResource(resource: Resource, config?: RequestConfig): Observable<Resource>;
    updatedResourceInfo(resourceId: string, updatedResources: Partial<Omit<Resource, 'data'>>, config?: RequestConfig): Observable<Resource>;
    updatedResourceData(resourceId: string, data: File, config?: RequestConfig): Observable<Resource>;
    deleteResource(resourceId: string, force?: boolean, config?: RequestConfig): Observable<Object>;
    getResourcesByIds(ids: string[], config?: RequestConfig): Observable<Array<ResourceInfo>>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResourceService>;
}

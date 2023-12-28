import { HttpClient } from '@angular/common/http';
import { PageLink } from '@shared/models/page/page-link';
import { RequestConfig } from '@core/http/http-utils';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { Resource, ResourceInfo, ResourceType } from '@shared/models/resource.models';
import { ResourcesService } from '@core/services/resources.service';
import * as i0 from "@angular/core";
export declare class ResourceService {
    private http;
    private resourcesService;
    constructor(http: HttpClient, resourcesService: ResourcesService);
    getResources(pageLink: PageLink, resourceType?: ResourceType, config?: RequestConfig): Observable<PageData<ResourceInfo>>;
    getTenantResources(pageLink: PageLink, config?: RequestConfig): Observable<PageData<ResourceInfo>>;
    getResource(resourceId: string, config?: RequestConfig): Observable<Resource>;
    getResourceInfo(resourceId: string, config?: RequestConfig): Observable<ResourceInfo>;
    downloadResource(resourceId: string): Observable<any>;
    saveResources(resources: Resource[], config?: RequestConfig): Observable<Resource[]>;
    saveResource(resource: Resource, config?: RequestConfig): Observable<Resource>;
    deleteResource(resourceId: string, config?: RequestConfig): Observable<Object>;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourceService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<ResourceService>;
}

import { CollectionViewer, DataSource, SelectionModel } from '@angular/cdk/collections';
import { ResourceInfo, ResourceSubType, ResourceType } from '@shared/models/resource.models';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { EntityBooleanFunction } from '@home/models/entity/entities-table-config.models';
import { PageLink } from '@shared/models/page/page-link';
import { ResourceService } from "@core/http/resource.service";
export declare class ResourcesDatasource implements DataSource<ResourceInfo> {
    private resourceService;
    private resources;
    private selectionEnabledFunction;
    private entitiesSubject;
    private readonly pageDataSubject;
    pageData$: Observable<PageData<ResourceInfo>>;
    selection: SelectionModel<ResourceInfo>;
    dataLoading: boolean;
    constructor(resourceService: ResourceService, resources: ResourceInfo[], selectionEnabledFunction: EntityBooleanFunction<ResourceInfo>);
    connect(collectionViewer: CollectionViewer): Observable<ResourceInfo[] | ReadonlyArray<ResourceInfo>>;
    disconnect(collectionViewer: CollectionViewer): void;
    reset(): void;
    loadEntities(pageLink: PageLink, resourceType: ResourceType, subType: ResourceSubType): Observable<PageData<ResourceInfo>>;
    fetchEntities(pageLink: PageLink, resourceType: ResourceType, subType: ResourceSubType): Observable<PageData<ResourceInfo>>;
    isAllSelected(): Observable<boolean>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    masterToggle(): void;
    private selectableEntitiesCount;
}

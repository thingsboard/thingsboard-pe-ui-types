import { CollectionViewer, DataSource, SelectionModel } from '@angular/cdk/collections';
import { ImageResourceInfo, ResourceSubType } from '@shared/models/resource.models';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { ImageService } from '@core/http/image.service';
import { EntityBooleanFunction } from '@home/models/entity/entities-table-config.models';
import { PageLink } from '@shared/models/page/page-link';
export declare class ImagesDatasource implements DataSource<ImageResourceInfo> {
    private imageService;
    private images;
    private selectionEnabledFunction;
    private entitiesSubject;
    private readonly pageDataSubject;
    pageData$: Observable<PageData<ImageResourceInfo>>;
    selection: SelectionModel<ImageResourceInfo>;
    dataLoading: boolean;
    constructor(imageService: ImageService, images: ImageResourceInfo[], selectionEnabledFunction: EntityBooleanFunction<ImageResourceInfo>);
    connect(collectionViewer: CollectionViewer): Observable<ImageResourceInfo[] | ReadonlyArray<ImageResourceInfo>>;
    disconnect(collectionViewer: CollectionViewer): void;
    reset(): void;
    loadEntities(pageLink: PageLink, imageSubType: ResourceSubType, includeSystemImages?: boolean): Observable<PageData<ImageResourceInfo>>;
    fetchEntities(pageLink: PageLink, imageSubType: ResourceSubType, includeSystemImages?: boolean): Observable<PageData<ImageResourceInfo>>;
    isAllSelected(): Observable<boolean>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    masterToggle(): void;
    private selectableEntitiesCount;
}

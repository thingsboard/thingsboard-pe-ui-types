import { CollectionViewer, DataSource, SelectionModel } from '@angular/cdk/collections';
import { EntityRelationInfo, EntitySearchDirection } from '@shared/models/relation.models';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { EntityRelationService } from '@core/http/entity-relation.service';
import { PageLink } from '@shared/models/page/page-link';
import { EntityId } from '@app/shared/models/id/entity-id';
import { TranslateService } from '@ngx-translate/core';
export declare class RelationsDatasource implements DataSource<EntityRelationInfo> {
    private entityRelationService;
    private translate;
    private relationsSubject;
    private pageDataSubject;
    pageData$: Observable<PageData<EntityRelationInfo>>;
    selection: SelectionModel<EntityRelationInfo>;
    private allRelations;
    constructor(entityRelationService: EntityRelationService, translate: TranslateService);
    connect(collectionViewer: CollectionViewer): Observable<EntityRelationInfo[] | ReadonlyArray<EntityRelationInfo>>;
    disconnect(collectionViewer: CollectionViewer): void;
    loadRelations(direction: EntitySearchDirection, entityId: EntityId, pageLink: PageLink, reload?: boolean): Observable<PageData<EntityRelationInfo>>;
    fetchRelations(direction: EntitySearchDirection, entityId: EntityId, pageLink: PageLink): Observable<PageData<EntityRelationInfo>>;
    getAllRelations(direction: EntitySearchDirection, entityId: EntityId): Observable<Array<EntityRelationInfo>>;
    isAllSelected(): Observable<boolean>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    masterToggle(): void;
}

import { CollectionViewer, DataSource, SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { EntityBooleanFunction } from '@home/models/entity/entities-table-config.models';
import { PageLink } from '@shared/models/page/page-link';
import { SecretStorage } from '@shared/models/secret-storage.models';
import { SecretStorageService } from '@core/http/secret-storage.service';
export declare class SecretsDatasource implements DataSource<SecretStorage> {
    private secretStorageService;
    private secrets;
    private selectionEnabledFunction;
    private entitiesSubject;
    private readonly pageDataSubject;
    pageData$: Observable<PageData<SecretStorage>>;
    selection: SelectionModel<SecretStorage>;
    dataLoading: boolean;
    constructor(secretStorageService: SecretStorageService, secrets: SecretStorage[], selectionEnabledFunction: EntityBooleanFunction<SecretStorage>);
    connect(collectionViewer: CollectionViewer): Observable<SecretStorage[] | ReadonlyArray<SecretStorage>>;
    disconnect(collectionViewer: CollectionViewer): void;
    reset(): void;
    loadEntities(pageLink: PageLink): Observable<PageData<SecretStorage>>;
    fetchEntities(pageLink: PageLink): Observable<PageData<SecretStorage>>;
    isAllSelected(): Observable<boolean>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    masterToggle(): void;
    private selectableEntitiesCount;
}

import { CollectionViewer, DataSource, SelectionModel } from '@angular/cdk/collections';
import { Observable } from 'rxjs';
import { PageData } from '@shared/models/page/page-data';
import { PageLink } from '@shared/models/page/page-link';
import { TranslateService } from '@ngx-translate/core';
import { GroupPermission, GroupPermissionFullInfo } from '@shared/models/group-permission.models';
import { RoleService } from '@core/http/role.service';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
export declare class GroupPermissionsDatasource implements DataSource<GroupPermissionFullInfo> {
    private roleService;
    private translate;
    private groupPermissionsSubject;
    private pageDataSubject;
    pageData$: Observable<PageData<GroupPermissionFullInfo>>;
    selection: SelectionModel<GroupPermissionFullInfo>;
    private allGroupPermissions;
    constructor(roleService: RoleService, translate: TranslateService);
    connect(collectionViewer: CollectionViewer): Observable<GroupPermissionFullInfo[] | ReadonlyArray<GroupPermissionFullInfo>>;
    disconnect(collectionViewer: CollectionViewer): void;
    loadGroupPermissions(entityGroup: EntityGroupInfo, registrationPermissions: Array<GroupPermission>, pageLink: PageLink, reload?: boolean): Observable<PageData<GroupPermissionFullInfo>>;
    fetchGroupPermissions(entityGroup: EntityGroupInfo, registrationPermissions: Array<GroupPermission>, pageLink: PageLink): Observable<PageData<GroupPermissionFullInfo>>;
    getAllGroupPermissions(entityGroup: EntityGroupInfo, registrationPermissions: Array<GroupPermission>): Observable<Array<GroupPermissionFullInfo>>;
    isAllSelected(): Observable<boolean>;
    isEmpty(): Observable<boolean>;
    total(): Observable<number>;
    masterToggle(): void;
    private selectableGroupPermissionsCount;
}

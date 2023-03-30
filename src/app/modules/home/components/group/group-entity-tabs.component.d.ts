import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { BaseData, HasId } from '@shared/models/base-data';
import { PageLink } from '@shared/models/page/page-link';
import { EntityGroupInfo, ShortEntityView } from '@shared/models/entity-group.models';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { EntityType } from '@shared/models/entity-type.models';
import { Resource } from '@shared/models/security.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class GroupEntityTabsComponent<T extends BaseData<HasId>> extends EntityTabsComponent<T, PageLink, T | ShortEntityView, EntityTableConfig<T> | GroupEntityTableConfig<T>> {
    private userPermissionsService;
    protected store: Store<AppState>;
    entityGroup: EntityGroupInfo;
    entityType: EntityType;
    entityResource: Resource;
    constructor(userPermissionsService: UserPermissionsService, store: Store<AppState>);
    ngOnInit(): void;
    hasVersionControl(): boolean;
    protected setEntitiesTableConfig(entitiesTableConfig: EntityTableConfig<T> | GroupEntityTableConfig<T>): void;
    protected isGroupMode(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupEntityTabsComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupEntityTabsComponent<any>, "tb-group-entity-tabs", never, {}, {}, never, never, false, never>;
}

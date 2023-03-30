import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { UntypedFormBuilder } from '@angular/forms';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { PageLink } from '@shared/models/page/page-link';
import { ShortEntityView } from '@shared/models/entity-group.models';
import { BaseData, HasId } from '@shared/models/base-data';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare abstract class GroupEntityComponent<T extends BaseData<HasId>> extends EntityComponent<T, PageLink, T | ShortEntityView, EntityTableConfig<T> | GroupEntityTableConfig<T>> {
    protected store: Store<AppState>;
    protected fb: UntypedFormBuilder;
    protected entityValue: T;
    protected entitiesTableConfigValue: EntityTableConfig<T> | GroupEntityTableConfig<T>;
    protected cd: ChangeDetectorRef;
    protected userPermissionsService: UserPermissionsService;
    get groupEntitiesTableConfig(): GroupEntityTableConfig<T>;
    entityGroup: import("@home/models/group/group-entities-table-config.models").EntityGroupStateInfo<T>;
    constructor(store: Store<AppState>, fb: UntypedFormBuilder, entityValue: T, entitiesTableConfigValue: EntityTableConfig<T> | GroupEntityTableConfig<T>, cd: ChangeDetectorRef, userPermissionsService: UserPermissionsService);
    protected setEntitiesTableConfig(entitiesTableConfig: EntityTableConfig<T> | GroupEntityTableConfig<T>): void;
    protected isGroupMode(): boolean;
    canManageOwnerAndGroups(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupEntityComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GroupEntityComponent<any>, never, never, {}, {}, never, never, false, never>;
}

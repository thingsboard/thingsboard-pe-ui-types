import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { FormBuilder } from '@angular/forms';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { PageLink } from '@shared/models/page/page-link';
import { ShortEntityView } from '@shared/models/entity-group.models';
import { BaseData, HasId } from '@shared/models/base-data';
import * as i0 from "@angular/core";
export declare abstract class GroupEntityComponent<T extends BaseData<HasId>> extends EntityComponent<T, PageLink, ShortEntityView, GroupEntityTableConfig<T>> {
    protected store: Store<AppState>;
    protected fb: FormBuilder;
    protected entityValue: T;
    protected entitiesTableConfigValue: GroupEntityTableConfig<T>;
    protected cd: ChangeDetectorRef;
    entityGroup: import("@home/models/group/group-entities-table-config.models").EntityGroupStateInfo<T>;
    constructor(store: Store<AppState>, fb: FormBuilder, entityValue: T, entitiesTableConfigValue: GroupEntityTableConfig<T>, cd: ChangeDetectorRef);
    protected setEntitiesTableConfig(entitiesTableConfig: GroupEntityTableConfig<T>): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupEntityComponent<any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<GroupEntityComponent<any>, never, never, {}, {}, never>;
}

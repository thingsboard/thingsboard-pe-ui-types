import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { BaseData, HasId } from '@shared/models/base-data';
import { PageLink } from '@shared/models/page/page-link';
import { ShortEntityView } from '@shared/models/entity-group.models';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { UtilsService } from '@core/services/utils.service';
import { TranslateService } from '@ngx-translate/core';
import * as i0 from "@angular/core";
export declare class GroupEntityTableHeaderComponent<T extends BaseData<HasId>> extends EntityTableHeaderComponent<T, PageLink, ShortEntityView, GroupEntityTableConfig<T>> {
    protected store: Store<AppState>;
    private utils;
    private translate;
    tableTitle: string;
    entitiesTitle: string;
    constructor(store: Store<AppState>, utils: UtilsService, translate: TranslateService);
    protected setEntitiesTableConfig(entitiesTableConfig: GroupEntityTableConfig<T>): void;
    toggleGroupDetails(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupEntityTableHeaderComponent<any>, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupEntityTableHeaderComponent<any>, "tb-group-entity-table-header", never, {}, {}, never, never, false>;
}

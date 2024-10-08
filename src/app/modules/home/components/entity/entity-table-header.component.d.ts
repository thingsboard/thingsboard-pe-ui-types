import { BaseData, HasId } from '@shared/models/base-data';
import { PageComponent } from '@shared/components/page.component';
import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { PageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare abstract class EntityTableHeaderComponent<T extends BaseData<HasId>, P extends PageLink = PageLink, L extends BaseData<HasId> = T, C extends EntityTableConfig<T, P, L> = EntityTableConfig<T, P, L>> extends PageComponent implements OnInit {
    protected store: Store<AppState>;
    entitiesTableConfigValue: C;
    set entitiesTableConfig(entitiesTableConfig: C);
    get entitiesTableConfig(): C;
    protected constructor(store: Store<AppState>);
    ngOnInit(): void;
    protected setEntitiesTableConfig(entitiesTableConfig: C): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityTableHeaderComponent<any, any, any, any>, never>;
    static ɵdir: i0.ɵɵDirectiveDeclaration<EntityTableHeaderComponent<any, any, any, any>, never, never, { "entitiesTableConfig": { "alias": "entitiesTableConfig"; "required": false; }; }, {}, never, never, false, never>;
}

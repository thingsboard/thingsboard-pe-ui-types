import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { EntityType } from '@shared/models/entity-type.models';
import { EntityView, EntityViewInfo } from '@app/shared/models/entity-view.models';
import * as i0 from "@angular/core";
export declare class EntityViewTableHeaderComponent extends EntityTableHeaderComponent<EntityViewInfo | EntityView> implements OnInit {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    includeCustomersLabel: string;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    entityViewTypeChanged(entityViewType: string): void;
    includeCustomersChanged(includeCustomers: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityViewTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityViewTableHeaderComponent, "tb-entity-view-table-header", never, {}, {}, never, never, false, never>;
}

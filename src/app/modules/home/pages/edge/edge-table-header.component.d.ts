import { OnInit } from '@angular/core';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { EntityType } from '@shared/models/entity-type.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Edge, EdgeInfo } from '@shared/models/edge.models';
import * as i0 from "@angular/core";
export declare class EdgeTableHeaderComponent extends EntityTableHeaderComponent<EdgeInfo | Edge> implements OnInit {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    includeCustomersLabel: string;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    edgeTypeChanged(edgeType: string): void;
    includeCustomersChanged(includeCustomers: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeTableHeaderComponent, "tb-edge-table-header", never, {}, {}, never, never, false, never>;
}

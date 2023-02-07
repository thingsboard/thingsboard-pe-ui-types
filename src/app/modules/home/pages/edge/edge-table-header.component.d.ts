import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { EntityType } from '@shared/models/entity-type.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { Edge } from "@shared/models/edge.models";
import * as i0 from "@angular/core";
export declare class EdgeTableHeaderComponent extends EntityTableHeaderComponent<Edge> {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>);
    edgeTypeChanged(edgeType: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeTableHeaderComponent, "tb-edge-table-header", never, {}, {}, never, never, false>;
}

import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EdgeInfo } from '@shared/models/edge.models';
import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import * as i0 from "@angular/core";
export declare class EdgeTabsComponent extends EntityTabsComponent<EdgeInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EdgeTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EdgeTabsComponent, "tb-edge-tabs", never, {}, {}, never, never>;
}

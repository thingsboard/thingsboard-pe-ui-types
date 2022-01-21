import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { EntityViewInfo } from '@app/shared/models/entity-view.models';
import * as i0 from "@angular/core";
export declare class EntityViewTabsComponent extends EntityTabsComponent<EntityViewInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityViewTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityViewTabsComponent, "tb-entity-view-tabs", never, {}, {}, never, never>;
}

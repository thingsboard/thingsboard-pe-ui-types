import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { Integration } from '@shared/models/integration.models';
import * as i0 from "@angular/core";
export declare class IntegrationTabsComponent extends EntityTabsComponent<Integration> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<IntegrationTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<IntegrationTabsComponent, "tb-integration-tabs", never, {}, {}, never, never>;
}

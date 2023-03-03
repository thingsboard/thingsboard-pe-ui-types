import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { WidgetsBundle } from '@shared/models/widgets-bundle.model';
import * as i0 from "@angular/core";
export declare class WidgetsBundleTabsComponent extends EntityTabsComponent<WidgetsBundle> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    isTenantWidgetsBundle(): boolean;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetsBundleTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetsBundleTabsComponent, "tb-widgets-bundle-tabs", never, {}, {}, never, never, false, never>;
}

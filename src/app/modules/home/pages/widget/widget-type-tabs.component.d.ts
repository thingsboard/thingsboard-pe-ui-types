import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { WidgetTypeDetails } from '@shared/models/widget.models';
import * as i0 from "@angular/core";
export declare class WidgetTypeTabsComponent extends EntityTabsComponent<WidgetTypeDetails> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    isTenantWidgetType(): boolean;
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<WidgetTypeTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<WidgetTypeTabsComponent, "tb-widget-type-tabs", never, {}, {}, never, never, false, never>;
}

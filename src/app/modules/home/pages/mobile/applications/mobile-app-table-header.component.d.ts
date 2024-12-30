import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { MobileApp } from '@shared/models/mobile-app.models';
import * as i0 from "@angular/core";
export declare class MobileAppTableHeaderComponent extends EntityTableHeaderComponent<MobileApp> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileAppTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileAppTableHeaderComponent, "tb-mobile-app-table-header", never, {}, {}, never, never, false, never>;
}

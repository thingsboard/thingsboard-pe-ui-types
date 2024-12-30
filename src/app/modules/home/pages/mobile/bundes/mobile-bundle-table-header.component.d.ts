import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { MobileAppBundleInfo } from '@shared/models/mobile-app.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class MobileBundleTableHeaderComponent extends EntityTableHeaderComponent<MobileAppBundleInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<MobileBundleTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MobileBundleTableHeaderComponent, "tb-mobile-bundle-table-header", never, {}, {}, never, never, false, never>;
}

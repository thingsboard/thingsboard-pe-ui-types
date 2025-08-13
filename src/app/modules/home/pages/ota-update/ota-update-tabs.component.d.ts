import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { OtaPackage } from '@shared/models/ota-package.models';
import * as i0 from "@angular/core";
export declare class OtaUpdateTabsComponent extends EntityTabsComponent<OtaPackage> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    isTenantOtaUpdate(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<OtaUpdateTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<OtaUpdateTabsComponent, "tb-ota-update-tabs", never, {}, {}, never, never, false, never>;
}

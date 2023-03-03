import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { TenantProfile } from '@shared/models/tenant.model';
import * as i0 from "@angular/core";
export declare class TenantProfileTabsComponent extends EntityTabsComponent<TenantProfile> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantProfileTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantProfileTabsComponent, "tb-tenant-profile-tabs", never, {}, {}, never, never, false, never>;
}

import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { TenantInfo } from '@shared/models/tenant.model';
import * as i0 from "@angular/core";
export declare class TenantTabsComponent extends EntityTabsComponent<TenantInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantTabsComponent, "tb-tenant-tabs", never, {}, {}, never, never, false, never>;
}

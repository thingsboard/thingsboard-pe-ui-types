import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { Role } from '@shared/models/role.models';
import * as i0 from "@angular/core";
export declare class RoleTabsComponent extends EntityTabsComponent<Role> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<RoleTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<RoleTabsComponent, "tb-role-tabs", never, {}, {}, never, never, false>;
}

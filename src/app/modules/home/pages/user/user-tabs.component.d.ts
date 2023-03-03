import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { User } from '@app/shared/models/user.model';
import * as i0 from "@angular/core";
export declare class UserTabsComponent extends EntityTabsComponent<User> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserTabsComponent, "tb-user-tabs", never, {}, {}, never, never, false, never>;
}

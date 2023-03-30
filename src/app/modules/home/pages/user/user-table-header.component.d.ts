import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { User, UserInfo } from '@shared/models/user.model';
import * as i0 from "@angular/core";
export declare class UserTableHeaderComponent extends EntityTableHeaderComponent<UserInfo | User> implements OnInit {
    protected store: Store<AppState>;
    includeCustomersLabel: string;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    includeCustomersChanged(includeCustomers: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<UserTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<UserTableHeaderComponent, "tb-user-table-header", never, {}, {}, never, never, false, never>;
}

import { OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { Customer, CustomerInfo } from '@shared/models/customer.model';
import * as i0 from "@angular/core";
export declare class CustomerTableHeaderComponent extends EntityTableHeaderComponent<CustomerInfo | Customer> implements OnInit {
    protected store: Store<AppState>;
    includeCustomersLabel: string;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    includeCustomersChanged(includeCustomers: boolean): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerTableHeaderComponent, "tb-customer-table-header", never, {}, {}, never, never, false, never>;
}

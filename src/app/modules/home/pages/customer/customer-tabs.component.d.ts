import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { Customer } from '@shared/models/customer.model';
import * as i0 from "@angular/core";
export declare class CustomerTabsComponent extends EntityTabsComponent<Customer> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerTabsComponent, "tb-customer-tabs", never, {}, {}, never, never>;
}

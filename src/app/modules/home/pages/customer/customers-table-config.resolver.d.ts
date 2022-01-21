import { Resolve, Router } from '@angular/router';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { TranslateService } from '@ngx-translate/core';
import { DatePipe } from '@angular/common';
import { EntityAction } from '@home/models/entity/entity-component.models';
import { Customer } from '@app/shared/models/customer.model';
import { CustomerService } from '@app/core/http/customer.service';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class CustomersTableConfigResolver implements Resolve<EntityTableConfig<Customer>> {
    private customerService;
    private translate;
    private datePipe;
    private router;
    private store;
    private readonly config;
    constructor(customerService: CustomerService, translate: TranslateService, datePipe: DatePipe, router: Router, store: Store<AppState>);
    resolve(): EntityTableConfig<Customer>;
    private openCustomer;
    manageCustomerUsers($event: Event, customer: Customer): void;
    manageCustomerAssets($event: Event, customer: Customer): void;
    manageCustomerDevices($event: Event, customer: Customer): void;
    manageCustomerDashboards($event: Event, customer: Customer): void;
    manageCustomerEdges($event: Event, customer: Customer): void;
    onCustomerAction(action: EntityAction<Customer>, config: EntityTableConfig<Customer>): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomersTableConfigResolver, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<CustomersTableConfigResolver>;
}

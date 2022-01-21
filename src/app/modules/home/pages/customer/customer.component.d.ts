import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Customer } from '@shared/models/customer.model';
import { TranslateService } from '@ngx-translate/core';
import { ContactBasedComponent } from '../../components/entity/contact-based.component';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { AuthState } from '@core/auth/auth.models';
import * as i0 from "@angular/core";
export declare class CustomerComponent extends ContactBasedComponent<Customer> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: Customer;
    protected entitiesTableConfigValue: EntityTableConfig<Customer>;
    protected fb: FormBuilder;
    protected cd: ChangeDetectorRef;
    isPublic: boolean;
    authState: AuthState;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: Customer, entitiesTableConfigValue: EntityTableConfig<Customer>, fb: FormBuilder, cd: ChangeDetectorRef);
    hideDelete(): boolean;
    buildEntityForm(entity: Customer): FormGroup;
    updateEntityForm(entity: Customer): void;
    onCustomerIdCopied(event: any): void;
    edgesSupportEnabled(): boolean;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerComponent, "tb-customer", never, {}, {}, never, never>;
}

import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Customer } from '@shared/models/customer.model';
import { TranslateService } from '@ngx-translate/core';
import { GroupContactBasedComponent } from '@home/components/group/group-contact-based.component';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import * as i0 from "@angular/core";
export declare class CustomerComponent extends GroupContactBasedComponent<Customer> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: Customer;
    protected entitiesTableConfigValue: GroupEntityTableConfig<Customer>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    isPublic: boolean;
    allowCustomerWhiteLabeling: boolean;
    whiteLabelingAllowed: boolean;
    edgesSupportEnabled: boolean;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: Customer, entitiesTableConfigValue: GroupEntityTableConfig<Customer>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    hideDelete(): boolean;
    hideManageUsers(): boolean;
    hideManageCustomers(): boolean;
    hideManageAssets(): boolean;
    hideManageDevices(): boolean;
    hideManageEntityViews(): boolean;
    hideManageEdges(): boolean;
    hideManageDashboards(): boolean;
    buildEntityForm(entity: Customer): UntypedFormGroup;
    updateEntityForm(entity: Customer): void;
    onCustomerIdCopied(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerComponent, "tb-customer", never, {}, {}, never, never, false>;
}

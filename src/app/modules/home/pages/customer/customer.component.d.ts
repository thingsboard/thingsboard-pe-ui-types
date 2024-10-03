import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { CustomerInfo } from '@shared/models/customer.model';
import { TranslateService } from '@ngx-translate/core';
import { GroupContactBasedComponent } from '@home/components/group/group-contact-based.component';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { CountryData } from '@shared/models/country.models';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { CMAssigneeType, CMScope } from '@shared/models/custom-menu.models';
import * as i0 from "@angular/core";
export declare class CustomerComponent extends GroupContactBasedComponent<CustomerInfo> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: CustomerInfo;
    protected entitiesTableConfigValue: EntityTableConfig<CustomerInfo> | GroupEntityTableConfig<CustomerInfo>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    protected countryData: CountryData;
    protected userPermissionsService: UserPermissionsService;
    CMScope: typeof CMScope;
    CMAssigneeType: typeof CMAssigneeType;
    isPublic: boolean;
    allowCustomerWhiteLabeling: boolean;
    whiteLabelingAllowed: boolean;
    edgesSupportEnabled: boolean;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: CustomerInfo, entitiesTableConfigValue: EntityTableConfig<CustomerInfo> | GroupEntityTableConfig<CustomerInfo>, fb: UntypedFormBuilder, cd: ChangeDetectorRef, countryData: CountryData, userPermissionsService: UserPermissionsService);
    hideDelete(): boolean;
    hideManageUsers(): boolean;
    hideManageCustomers(): boolean;
    hideManageAssets(): boolean;
    hideManageDevices(): boolean;
    hideManageEntityViews(): boolean;
    hideManageEdges(): boolean;
    hideManageDashboards(): boolean;
    buildEntityForm(entity: CustomerInfo): UntypedFormGroup;
    updateEntityForm(entity: CustomerInfo): void;
    onCustomerIdCopied(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<CustomerComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<CustomerComponent, "tb-customer", never, {}, {}, never, never, false, never>;
}

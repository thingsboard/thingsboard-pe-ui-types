import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { Tenant, TenantInfo } from '@app/shared/models/tenant.model';
import { TranslateService } from '@ngx-translate/core';
import { ContactBasedComponent } from '../../components/entity/contact-based.component';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { CountryData } from '@shared/models/country.models';
import * as i0 from "@angular/core";
export declare class TenantComponent extends ContactBasedComponent<TenantInfo> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: TenantInfo;
    protected entitiesTableConfigValue: EntityTableConfig<TenantInfo>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    protected countryData: CountryData;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: TenantInfo, entitiesTableConfigValue: EntityTableConfig<TenantInfo>, fb: UntypedFormBuilder, cd: ChangeDetectorRef, countryData: CountryData);
    hideDelete(): boolean;
    buildEntityForm(entity: TenantInfo): UntypedFormGroup;
    updateEntityForm(entity: Tenant): void;
    updateFormState(): void;
    onTenantIdCopied(event: any): void;
    onTenantProfileUpdated(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantComponent, "tb-tenant", never, {}, {}, never, never, false, never>;
}

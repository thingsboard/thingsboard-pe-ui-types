import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TenantProfile } from '@shared/models/tenant.model';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EntityComponent } from '../entity/entity.component';
import * as i0 from "@angular/core";
export declare class TenantProfileComponent extends EntityComponent<TenantProfile> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: TenantProfile;
    protected entitiesTableConfigValue: EntityTableConfig<TenantProfile>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    standalone: boolean;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: TenantProfile, entitiesTableConfigValue: EntityTableConfig<TenantProfile>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    hideDelete(): boolean;
    buildForm(entity: TenantProfile): UntypedFormGroup;
    updateForm(entity: TenantProfile): void;
    updateFormState(): void;
    onTenantProfileIdCopied(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<TenantProfileComponent, [null, null, { optional: true; }, { optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<TenantProfileComponent, "tb-tenant-profile", never, { "standalone": { "alias": "standalone"; "required": false; }; }, {}, never, never, false, never>;
}

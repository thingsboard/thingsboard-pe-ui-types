import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityComponent } from '../../components/entity/entity.component';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { AssetInfo } from '@app/shared/models/asset.models';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import * as i0 from "@angular/core";
export declare class AssetComponent extends EntityComponent<AssetInfo> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: AssetInfo;
    protected entitiesTableConfigValue: EntityTableConfig<AssetInfo>;
    fb: FormBuilder;
    protected cd: ChangeDetectorRef;
    entityType: typeof EntityType;
    assetScope: 'tenant' | 'customer' | 'customer_user' | 'edge';
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: AssetInfo, entitiesTableConfigValue: EntityTableConfig<AssetInfo>, fb: FormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    isAssignedToCustomer(entity: AssetInfo): boolean;
    buildForm(entity: AssetInfo): FormGroup;
    updateForm(entity: AssetInfo): void;
    onAssetIdCopied($event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetComponent, "tb-asset", never, {}, {}, never, never>;
}

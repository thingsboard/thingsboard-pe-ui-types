import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { EntityTableConfig } from '@home/models/entity/entities-table-config.models';
import { EntityComponent } from '../entity/entity.component';
import { EntityType } from '@shared/models/entity-type.models';
import { ServiceType } from '@shared/models/queue.models';
import { EntityId } from '@shared/models/id/entity-id';
import { AssetProfile } from '@shared/models/asset.models';
import { RuleChainType } from '@shared/models/rule-chain.models';
import * as i0 from "@angular/core";
export declare class AssetProfileComponent extends EntityComponent<AssetProfile> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: AssetProfile;
    protected entitiesTableConfigValue: EntityTableConfig<AssetProfile>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    standalone: boolean;
    entityType: typeof EntityType;
    serviceType: ServiceType;
    edgeRuleChainType: RuleChainType;
    TB_SERVICE_QUEUE: string;
    assetProfileId: EntityId;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: AssetProfile, entitiesTableConfigValue: EntityTableConfig<AssetProfile>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    hideDelete(): boolean;
    buildForm(entity: AssetProfile): UntypedFormGroup;
    updateForm(entity: AssetProfile): void;
    prepareFormValue(formValue: any): any;
    onAssetProfileIdCopied(event: any): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetProfileComponent, [null, null, { optional: true; }, { optional: true; }, null, null]>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetProfileComponent, "tb-asset-profile", never, { "standalone": "standalone"; }, {}, never, never, false>;
}

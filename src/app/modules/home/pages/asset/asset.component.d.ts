import { ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';
import { EntityType } from '@shared/models/entity-type.models';
import { TranslateService } from '@ngx-translate/core';
import { Asset } from '@shared/models/asset.models';
import { GroupEntityComponent } from '@home/components/group/group-entity.component';
import { GroupEntityTableConfig } from '@home/models/group/group-entities-table-config.models';
import * as i0 from "@angular/core";
export declare class AssetComponent extends GroupEntityComponent<Asset> {
    protected store: Store<AppState>;
    protected translate: TranslateService;
    protected entityValue: Asset;
    protected entitiesTableConfigValue: GroupEntityTableConfig<Asset>;
    protected fb: UntypedFormBuilder;
    protected cd: ChangeDetectorRef;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>, translate: TranslateService, entityValue: Asset, entitiesTableConfigValue: GroupEntityTableConfig<Asset>, fb: UntypedFormBuilder, cd: ChangeDetectorRef);
    ngOnInit(): void;
    hideDelete(): boolean;
    buildForm(entity: Asset): UntypedFormGroup;
    updateForm(entity: Asset): void;
    onAssetIdCopied($event: any): void;
    onAssetProfileUpdated(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetComponent, "tb-asset", never, {}, {}, never, never, false, never>;
}

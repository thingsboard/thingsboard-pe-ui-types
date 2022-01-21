import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '../../components/entity/entity-table-header.component';
import { EntityType } from '@shared/models/entity-type.models';
import { AssetInfo } from '@shared/models/asset.models';
import * as i0 from "@angular/core";
export declare class AssetTableHeaderComponent extends EntityTableHeaderComponent<AssetInfo> {
    protected store: Store<AppState>;
    entityType: typeof EntityType;
    constructor(store: Store<AppState>);
    assetTypeChanged(assetType: string): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetTableHeaderComponent, "tb-asset-table-header", never, {}, {}, never, never>;
}

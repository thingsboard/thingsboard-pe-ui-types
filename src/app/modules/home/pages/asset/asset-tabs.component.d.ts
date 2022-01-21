import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { AssetInfo } from '@app/shared/models/asset.models';
import * as i0 from "@angular/core";
export declare class AssetTabsComponent extends EntityTabsComponent<AssetInfo> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetTabsComponent, "tb-asset-tabs", never, {}, {}, never, never>;
}

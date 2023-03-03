import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '../../components/entity/entity-tabs.component';
import { AssetProfile } from '@shared/models/asset.models';
import * as i0 from "@angular/core";
export declare class AssetProfileTabsComponent extends EntityTabsComponent<AssetProfile> {
    protected store: Store<AppState>;
    constructor(store: Store<AppState>);
    ngOnInit(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<AssetProfileTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<AssetProfileTabsComponent, "tb-asset-profile-tabs", never, {}, {}, never, never, false, never>;
}

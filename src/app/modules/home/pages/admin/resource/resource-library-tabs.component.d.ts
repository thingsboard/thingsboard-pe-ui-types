import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import { Resource } from '@shared/models/resource.models';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class ResourceLibraryTabsComponent extends EntityTabsComponent<Resource> {
    protected store: Store<AppState>;
    readonly NULL_UUID = "13814000-1dd2-11b2-8080-808080808080";
    constructor(store: Store<AppState>);
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourceLibraryTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResourceLibraryTabsComponent, "tb-resource-library-tabs", never, {}, {}, never, never, false, never>;
}

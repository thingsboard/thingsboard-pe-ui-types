import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Resource, ResourceInfo, ResourceType } from '@shared/models/resource.models';
import { PageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class ResourcesTableHeaderComponent extends EntityTableHeaderComponent<Resource, PageLink, ResourceInfo> {
    protected store: Store<AppState>;
    readonly resourceTypes: ResourceType[];
    readonly resourceTypesTranslationMap: Map<ResourceType, string>;
    constructor(store: Store<AppState>);
    resourceTypeChanged(resourceType: ResourceType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<ResourcesTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<ResourcesTableHeaderComponent, "tb-resources-table-header", never, {}, {}, never, never, false, never>;
}

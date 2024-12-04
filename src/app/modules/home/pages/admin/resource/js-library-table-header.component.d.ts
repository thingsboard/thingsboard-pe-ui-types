import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTableHeaderComponent } from '@home/components/entity/entity-table-header.component';
import { Resource, ResourceInfo, ResourceSubType } from '@shared/models/resource.models';
import { PageLink } from '@shared/models/page/page-link';
import * as i0 from "@angular/core";
export declare class JsLibraryTableHeaderComponent extends EntityTableHeaderComponent<Resource, PageLink, ResourceInfo> {
    protected store: Store<AppState>;
    readonly jsResourceSubTypes: ResourceSubType[];
    readonly resourceSubTypesTranslationMap: Map<ResourceSubType, string>;
    constructor(store: Store<AppState>);
    jsResourceSubTypeChanged(resourceSubType: ResourceSubType): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<JsLibraryTableHeaderComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<JsLibraryTableHeaderComponent, "tb-js-library-table-header", never, {}, {}, never, never, false, never>;
}

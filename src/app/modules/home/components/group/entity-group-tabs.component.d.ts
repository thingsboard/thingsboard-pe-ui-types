import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import { EntityTabsComponent } from '@home/components/entity/entity-tabs.component';
import { EntityGroupInfo } from '@shared/models/entity-group.models';
import { WidgetActionsData } from '@home/components/widget/action/manage-widget-actions.component.models';
import { PageLink } from '@shared/models/page/page-link';
import { EntityGroupsTableConfig } from '@home/components/group/entity-groups-table-config';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class EntityGroupTabsComponent extends EntityTabsComponent<EntityGroupInfo, PageLink, EntityGroupInfo, EntityGroupsTableConfig> {
    private userPermissionsService;
    protected store: Store<AppState>;
    actionsData: WidgetActionsData;
    entityGroupActionTypesList: import("../../../../shared/public-api").WidgetActionType[];
    constructor(userPermissionsService: UserPermissionsService, store: Store<AppState>);
    ngOnInit(): void;
    validateAndMark(): void;
    onPermissionsChanged(): void;
    hasVersionControl(): boolean;
    private validate;
    protected setEntity(entity: EntityGroupInfo): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityGroupTabsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityGroupTabsComponent, "tb-entity-group-tabs", never, {}, {}, never, never>;
}

import { EntityId } from '@shared/models/id/entity-id';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { GroupEntityInfo } from '@shared/models/base-data';
import { Store } from '@ngrx/store';
import { AppState } from '@core/core.state';
import * as i0 from "@angular/core";
export declare class GroupEntityInfoComponent {
    private store;
    private userPermissionsService;
    groupEntityValue?: GroupEntityInfo<EntityId>;
    set groupEntity(value: GroupEntityInfo<EntityId>);
    get groupEntity(): GroupEntityInfo<EntityId>;
    authUser: import("../../../../shared/public-api").AuthUser;
    displayOwner: boolean;
    ownerLabel: string;
    groupPrefixUrl: string;
    constructor(store: Store<AppState>, userPermissionsService: UserPermissionsService);
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupEntityInfoComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupEntityInfoComponent, "tb-group-entity-info", never, { "groupEntity": { "alias": "groupEntity"; "required": false; }; }, {}, never, never, false, never>;
}

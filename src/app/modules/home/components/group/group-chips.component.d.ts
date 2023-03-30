import { EntityId } from '@shared/models/id/entity-id';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import { GroupEntityInfo } from '@shared/models/base-data';
import * as i0 from "@angular/core";
export declare class GroupChipsComponent {
    private userPermissionsService;
    groupEntityValue?: GroupEntityInfo<EntityId>;
    set groupEntity(value: GroupEntityInfo<EntityId>);
    get groupEntity(): GroupEntityInfo<EntityId>;
    groupPrefixUrl: string;
    constructor(userPermissionsService: UserPermissionsService);
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<GroupChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<GroupChipsComponent, "tb-group-chips", never, { "groupEntity": "groupEntity"; }, {}, never, never, false, never>;
}

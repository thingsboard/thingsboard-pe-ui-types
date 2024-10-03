import { BaseData, GroupEntityInfo } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class EntityChipsComponent {
    private userPermissionsService;
    set entity(value: BaseData<EntityId> | GroupEntityInfo<EntityId>);
    get entity(): BaseData<EntityId> | GroupEntityInfo<EntityId>;
    entityDetailsPrefixUrl: string;
    subEntities: Array<BaseData<EntityId>>;
    private entityValue?;
    private subEntitiesKey;
    constructor(userPermissionsService: UserPermissionsService);
    update(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityChipsComponent, "tb-entity-chips", never, { "entity": "entity"; }, {}, never, never, false, never>;
}

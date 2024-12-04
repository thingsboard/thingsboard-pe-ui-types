import { OnChanges, SimpleChanges } from '@angular/core';
import { BaseData, GroupEntityInfo } from '@shared/models/base-data';
import { EntityId } from '@shared/models/id/entity-id';
import { UserPermissionsService } from '@core/http/user-permissions.service';
import * as i0 from "@angular/core";
export declare class EntityChipsComponent implements OnChanges {
    private userPermissionsService;
    entity: BaseData<EntityId> | GroupEntityInfo<EntityId>;
    key: string;
    entityDetailsPrefixUrl: string;
    subEntities: Array<BaseData<EntityId>>;
    constructor(userPermissionsService: UserPermissionsService);
    ngOnChanges(changes: SimpleChanges): void;
    private update;
    static ɵfac: i0.ɵɵFactoryDeclaration<EntityChipsComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<EntityChipsComponent, "tb-entity-chips", never, { "entity": { "alias": "entity"; "required": false; }; "key": { "alias": "key"; "required": false; }; }, {}, never, never, false, never>;
}

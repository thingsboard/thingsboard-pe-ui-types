import { EntityType } from '@shared/models/entity-type.models';
import { Observable } from 'rxjs';
import { EntityAlias } from '@shared/models/alias.models';
export interface EntityAliasSelectCallbacks {
    createEntityAlias: (alias: string, allowedEntityTypes: Array<EntityType>) => Observable<EntityAlias>;
}

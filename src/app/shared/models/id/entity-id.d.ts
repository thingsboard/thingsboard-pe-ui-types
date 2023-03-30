import { AliasEntityType, EntityType } from '@shared/models/entity-type.models';
import { HasUUID } from '@shared/models/id/has-uuid';
export interface EntityId extends HasUUID {
    entityType: EntityType | AliasEntityType;
}
export declare const entityIdEquals: (entityId1: EntityId, entityId2: EntityId) => boolean;
export declare const entityIdsEquals: (entityIds1: EntityId[], entityIds2: EntityId[]) => boolean;
export declare const entityIdsContains: (entityIds: EntityId[], checkEntityId: EntityId) => boolean;

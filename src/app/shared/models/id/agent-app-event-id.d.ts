import { EntityId } from './entity-id';
import { EntityType } from '@shared/models/entity-type.models';
export declare class AgentAppEventId implements EntityId {
    entityType: EntityType;
    id: string;
    constructor(id: string);
}

import { EntityId } from './entity-id';
import { EntityType } from '@shared/models/entity-type.models';
export declare class AgentAppUnitId implements EntityId {
    entityType: EntityType;
    id: string;
    constructor(id: string);
}

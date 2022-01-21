import { EntityId } from '@shared/models/id/entity-id';
import { HasUUID } from '@shared/models/id/has-uuid';
export declare type HasId = EntityId | HasUUID;
export interface BaseData<T extends HasId> {
    createdTime?: number;
    id?: T;
    name?: string;
    label?: string;
}
export declare function hasIdEquals(id1: HasId, id2: HasId): boolean;
